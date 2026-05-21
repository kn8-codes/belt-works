const postModules = import.meta.glob('/content/posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
});

/**
 * Flat-file blog loader. Kept local and dependency-free because the current
 * content shape is closer to README notes than a publishing system.
 */

/** @typedef {{ title: string; slug: string; description: string; date: string }} PostMeta */
/** @typedef {PostMeta & { body: string; html: string; path: string }} BlogPost */

/** @param {string} value */
function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

/** @param {string} value */
function inlineMarkdown(value) {
  const escaped = escapeHtml(value);

  return escaped
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[^\s)]+)\)/g, '<a href="$2">$1</a>');
}

/** @param {string} markdown */
function renderMarkdown(markdown) {
  const lines = markdown.trim().split('\n');
  /** @type {string[]} */
  const blocks = [];
  /** @type {string[]} */
  let paragraph = [];
  /** @type {string[]} */
  let list = [];
  /** @type {string[]} */
  let code = [];
  let inCode = false;

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      blocks.push(`<p>${inlineMarkdown(paragraph.join(' '))}</p>`);
      paragraph = [];
    }
  };

  const flushList = () => {
    if (list.length > 0) {
      blocks.push(`<ul>${list.map((item) => `<li>${inlineMarkdown(item)}</li>`).join('')}</ul>`);
      list = [];
    }
  };

  for (const line of lines) {
    if (line.startsWith('```')) {
      if (inCode) {
        blocks.push(`<pre><code>${escapeHtml(code.join('\n'))}</code></pre>`);
        code = [];
        inCode = false;
      } else {
        flushParagraph();
        flushList();
        inCode = true;
      }
      continue;
    }

    if (inCode) {
      code.push(line);
      continue;
    }

    if (line.trim() === '') {
      flushParagraph();
      flushList();
      continue;
    }

    const heading = /^(#{1,3})\s+(.+)$/.exec(line);
    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      blocks.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }

    const listItem = /^[-*]\s+(.+)$/.exec(line);
    if (listItem) {
      flushParagraph();
      list.push(listItem[1]);
      continue;
    }

    paragraph.push(line.trim());
  }

  flushParagraph();
  flushList();

  if (inCode) {
    blocks.push(`<pre><code>${escapeHtml(code.join('\n'))}</code></pre>`);
  }

  return blocks.join('\n');
}

/** @param {string} source */
function parseFrontmatter(source) {
  const match = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(source);

  if (!match) {
    throw new Error('Blog post is missing YAML frontmatter.');
  }

  const meta = Object.fromEntries(
    match[1]
      .split('\n')
      .filter(Boolean)
      .map((line) => {
        const [key, ...rest] = line.split(':');
        return [key.trim(), rest.join(':').trim().replace(/^['"]|['"]$/g, '')];
      })
  );

  for (const field of ['title', 'slug', 'description', 'date']) {
    if (!meta[field]) {
      throw new Error(`Blog post is missing frontmatter field: ${field}`);
    }
  }

  return { meta: /** @type {PostMeta} */ (meta), body: match[2].trim() };
}

/** @type {BlogPost[]} */
const posts = Object.entries(postModules)
  .map(([path, raw]) => {
    const { meta, body } = parseFrontmatter(/** @type {string} */ (raw));
    return {
      ...meta,
      body,
      html: renderMarkdown(body),
      path
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));

export function getPosts() {
  return posts.map((post) => ({
    title: post.title,
    slug: post.slug,
    description: post.description,
    date: post.date
  }));
}

/** @param {string} slug */
export function getPost(slug) {
  return posts.find((post) => post.slug === slug);
}
