import { browser } from '$app/environment';
import { env } from '$env/dynamic/public';

type Consent = 'unavailable' | 'undecided' | 'granted' | 'denied';
type SelectionMethod = 'pointer' | 'keyboard';
type Surface = 'problem_map' | 'next_step';

type PostHogClient = {
  capture: (event: string, properties: Record<string, string | number>) => void;
  opt_in_capturing: () => void;
  opt_out_capturing: () => void;
  reset: () => void;
};

type PostHogSdk = {
  init: (key: string, options: Record<string, string | boolean>) => PostHogClient;
};

declare global {
  interface Window {
    posthog?: PostHogSdk;
  }
}

// This module deliberately has no dependency on posthog-js. The SDK is loaded only
// after an affirmative, session-scoped choice so a normal visit has no analytics SDK,
// analytics request, or analytics persistence.
const APPROVAL_VALUE = 'approved-aggregate-v1';
const SESSION_KEY = 'belt.analytics-consent.v1';
const MAP_VERSION = '2026-07';
const POSTHOG_HOSTS = new Set(['https://us.i.posthog.com', 'https://eu.i.posthog.com']);
const POSTHOG_SCRIPT_PATH = '/static/array.js';

// Deliberately empty until the problem-map owner reviews non-sensitive operational
// keys. An omitted key is safer than a compressed label that still reveals a need.
export const SAFE_PROBLEM_MAP_KEYS: Readonly<{
  roots: ReadonlySet<string>;
  categories: ReadonlySet<string>;
  leaves: ReadonlySet<string>;
}> = Object.freeze({
  roots: new Set<string>(),
  categories: new Set<string>(),
  leaves: new Set<string>()
});

const allowedIntentKeys = new Set([
  'contact_form',
  'contact_email',
  'contact_phone',
  'resource_directory',
  'other_approved_next_step'
]);

let sdkPromise: Promise<PostHogSdk> | undefined;
let client: PostHogClient | undefined;

function config(): { key: string; host: string } | null {
  const key = env.PUBLIC_POSTHOG_KEY?.trim();
  const host = env.PUBLIC_POSTHOG_HOST?.trim() || 'https://us.i.posthog.com';

  if (env.PUBLIC_POSTHOG_APPROVED !== APPROVAL_VALUE || !key || !POSTHOG_HOSTS.has(host)) {
    return null;
  }

  return { key, host };
}

export function analyticsIsConfigured(): boolean {
  return Boolean(config());
}

export function analyticsConsent(): Consent {
  if (!browser || !analyticsIsConfigured()) return 'unavailable';
  const value = sessionStorage.getItem(SESSION_KEY);
  return value === 'granted' || value === 'denied' ? value : 'undecided';
}

function hasConsent(): boolean {
  return analyticsConsent() === 'granted';
}

function loadSdk({ host }: { host: string }): Promise<PostHogSdk> {
  if (window.posthog) return Promise.resolve(window.posthog);
  if (sdkPromise) return sdkPromise;

  sdkPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `${host}${POSTHOG_SCRIPT_PATH}`;
    script.onload = () => window.posthog ? resolve(window.posthog) : reject(new Error('PostHog SDK was unavailable after loading.'));
    script.onerror = () => reject(new Error('PostHog SDK could not be loaded.'));
    document.head.append(script);
  });

  return sdkPromise;
}

export async function allowAggregateAnalytics(): Promise<boolean> {
  const settings = config();
  if (!browser || !settings) return false;

  // This preference is session-only. It is an operating choice, not an analytics ID.
  sessionStorage.setItem(SESSION_KEY, 'granted');

  try {
    const posthog = await loadSdk(settings);
    if (!hasConsent()) return false;

    client = posthog.init(settings.key, {
      api_host: settings.host,
      autocapture: false,
      capture_pageview: false,
      capture_pageleave: false,
      capture_dead_clicks: false,
      capture_exceptions: false,
      capture_heatmaps: false,
      capture_performance: false,
      disable_session_recording: true,
      disable_persistence: true,
      opt_out_capturing_by_default: true,
      person_profiles: 'never',
      advanced_disable_decide: true,
      disable_surveys: true,
      enable_recording_console_log: false
    });
    client.opt_in_capturing();
    return true;
  } catch (error) {
    // Do not surface analytics failures to visitors or make the site depend on them.
    console.warn('Optional aggregate analytics did not start.', error);
    sessionStorage.setItem(SESSION_KEY, 'denied');
    client = undefined;
    return false;
  }
}

export function declineAggregateAnalytics(): void {
  if (!browser) return;
  sessionStorage.setItem(SESSION_KEY, 'denied');
  client?.opt_out_capturing();
  client?.reset();
  client = undefined;
}

function capture(event: string, surface: Surface, properties: Record<string, string> = {}): boolean {
  if (!hasConsent() || !client) return false;
  client.capture(event, {
    schema_version: 1,
    surface,
    consent_mode: 'opt_in',
    map_version: MAP_VERSION,
    ...properties
  });
  return true;
}

export function trackProblemMapViewed(): boolean {
  return capture('sf_problem_map_viewed', 'problem_map');
}

export function trackProblemMapRootSelected(rootKey: string, selectionMethod: SelectionMethod): boolean {
  if (!SAFE_PROBLEM_MAP_KEYS.roots.has(rootKey)) return false;
  return capture('sf_problem_map_root_selected', 'problem_map', { root_key: rootKey, selection_method: selectionMethod });
}

export function trackProblemMapCategorySelected(rootKey: string, categoryKey: string, selectionMethod: SelectionMethod): boolean {
  if (!SAFE_PROBLEM_MAP_KEYS.roots.has(rootKey) || !SAFE_PROBLEM_MAP_KEYS.categories.has(categoryKey)) return false;
  return capture('sf_problem_map_category_selected', 'problem_map', { root_key: rootKey, category_key: categoryKey, selection_method: selectionMethod });
}

export function trackProblemMapLeafSelected(rootKey: string, categoryKey: string, leafKey: string, selectionMethod: SelectionMethod): boolean {
  if (!SAFE_PROBLEM_MAP_KEYS.roots.has(rootKey) || !SAFE_PROBLEM_MAP_KEYS.categories.has(categoryKey) || !SAFE_PROBLEM_MAP_KEYS.leaves.has(leafKey)) return false;
  return capture('sf_problem_map_leaf_selected', 'problem_map', {
    root_key: rootKey,
    category_key: categoryKey,
    leaf_key: leafKey,
    selection_method: selectionMethod
  });
}

export function trackNextStepIntent(intentKey: string, originSurface: Surface): boolean {
  if (!allowedIntentKeys.has(intentKey)) return false;
  return capture('sf_next_step_intent_selected', 'next_step', { intent_key: intentKey, origin_surface: originSurface });
}
