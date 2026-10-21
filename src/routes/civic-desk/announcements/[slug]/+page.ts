import { error } from '@sveltejs/kit';
import { page } from '$app/state';

export async function load({ params }) {
  const { default: posts } = await import('$lib/data/civic-posts.js');
  const post = posts.find((entry) => entry.slug === params.slug);
  if (!post) error(404, 'Announcement not found');

  const articlePath = `${page.url.origin}${page.url.pathname}/`;

  const breadcrumbs = [
    { name: 'Towpath Civic', path: '/civic-desk/' },
    { name: 'Announcements', path: '/civic-desk/announcements/' },
    { name: post.city, path: `/civic-desk/cities/${post.cityId}/` },
    { name: post.title, path: articlePath }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'NewsArticle',
        headline: post.title,
        description: post.summary,
        articleSection: post.topic,
        about: post.city,
        datePublished: post.publishedDate,
        dateModified: post.reviewedDate || post.publishedDate,
        author: { '@type': 'Organization', name: 'Towpath Civic', url: page.url.origin },
        publisher: { '@type': 'Organization', name: 'Towpath Civic (a Belt.Works project)', url: page.url.origin },
        mainEntityOfPage: articlePath,
        isBasedOn: {
          '@type': 'WebPage',
          name: post.officialSourceLabel,
          url: post.officialSourceUrl
        },
        articleBody: `${post.summary} ${post.residentImpact}`,
        inLanguage: 'en-US'
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.path
        }))
      },
      {
        '@type': 'FAQPage',
        mainEntity: post.faq.map((entry) => ({
          '@type': 'Question',
          name: entry.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: entry.answer
          }
        }))
      }
    ]
  };

  return { post, breadcrumbs, schema, articlePath, path: page.url.pathname };
}
