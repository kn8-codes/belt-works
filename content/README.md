# belt.works content

Blog posts live in `content/posts/` as flat Markdown files.

Each post needs frontmatter with:

```yaml
---
title: Post title
slug: post-slug
description: Short summary for the index and metadata.
date: YYYY-MM-DD
---
```

The `/blog` route reads these files at build time. No CMS, no database.
