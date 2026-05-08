// Public ROOMS data contract.
// This file documents the shape the public site is allowed to render.
// Keep this sanitized. No real hostnames, command arguments, private paths, prompts, or client data.

/**
 * @typedef {'idle' | 'working' | 'blocked'} RoomStatus
 */

/**
 * Public-safe room/node state for `/rooms`.
 *
 * @typedef {object} PublicRoom
 * @property {string} id Stable public identifier such as `m4`, `m1`, or `jeep`.
 * @property {string} displayName Sanitized display name. Never a real hostname.
 * @property {RoomStatus} status Public status bucket.
 * @property {string} role Public role label.
 * @property {string} taskLabel Sanitized task label. No command args, no file paths.
 * @property {number} progress Progress from 0 to 1.
 * @property {number} queueLength Count of queued work items. No raw queue payloads.
 * @property {string} lastSeenAt ISO timestamp of latest public heartbeat/activity.
 */

export {};
