export default [
  {
    id: 'hudson-stow-road-update-sample',
    city: 'Hudson',
    cityId: 'hudson',
    topic: 'Transportation',
    title: 'Hudson keeps Stow Road closed for I-480 bridge work',
    slug: 'hudson-i480-stow-road-bridge-work',
    status: 'sample',
    summary: 'A source-linked summary of an official Hudson announcement. The final page will verify the release, rewrite the key facts in plain language, and preserve the official announcement link.',
    residentImpact: 'Residents will see the affected road, detour, expected end date, and what changed from the prior official update.',
    facts: [
      ['Source type', 'City press release'],
      ['Beat', 'Transportation'],
      ['Verification', 'Required before publication'],
      ['Structure', 'Original summary plus official backlink']
    ],
    faq: [
      {
        question: 'What is this page?',
        answer: 'It is a structure sample for a future neutral, source-linked civic announcement summary.'
      }
    ],
    officialSourceLabel: 'City of Hudson Press Room',
    officialSourceUrl: 'https://www.hudson.oh.us/948/Press-Room'
  },
  {
    id: 'cuyahoga-falls-public-safety-sample',
    city: 'Cuyahoga Falls',
    cityId: 'cuyahoga-falls',
    topic: 'Public safety',
    title: 'Cuyahoga Falls sample announcement structure',
    slug: 'cuyahoga-falls-public-safety-announcement-sample',
    status: 'sample',
    summary: 'This placeholder demonstrates how a release will be transformed into an independent page after its official source is verified.',
    residentImpact: 'The announcement page will explain what changed, who is affected, where the official record lives, and when the summary was last reviewed.',
    facts: [
      ['Source type', 'City or department release'],
      ['Beat', 'Public safety'],
      ['Verification', 'Required before publication'],
      ['Structure', 'Original summary plus official backlink']
    ],
    faq: [
      {
        question: 'Why show the work?',
        answer: 'The official source remains primary. The summary adds speed, organization, and practical resident context without pretending to replace the government record.'
      }
    ],
    officialSourceLabel: 'City of Cuyahoga Falls news',
    officialSourceUrl: 'https://www.cityofcf.com/news'
  },
  {
    id: 'beachwood-city-council-sample',
    city: 'Beachwood',
    cityId: 'beachwood',
    topic: 'City council',
    title: 'Beachwood council hearing sample',
    slug: 'beachwood-city-council-hearing-sample',
    status: 'sample',
    titleCase: false,
    summary: 'Council and hearing announcements will include date, location, agenda source, public-comment information, and an official record link when available.',
    residentImpact: 'Residents will be able to tell quickly whether an item requires action, attendance, or is merely informational.',
    facts: [
      ['Source type', 'Council or city website'],
      ['Beat', 'City council'],
      ['Verification', 'Required before publication'],
      ['Structure', 'Original summary plus official backlink']
    ],
    faq: [
      {
        question: 'Will political campaign content appear here?',
        answer: 'No. The approved scope is neutral public-record information, practical civic utility, and official source links.'
      }
    ],
    officialSourceLabel: 'City of Beachwood official site',
    officialSourceUrl: 'https://www.beachwoodohio.com/'
  }
];
