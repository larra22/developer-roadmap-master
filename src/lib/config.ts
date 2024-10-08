export const siteConfig = {
  title: 'Roadmaps to becoming a modern developer',
  description:
    'Community driven roadmaps, articles and guides for developers to grow in their career.',
  keywords: [
    'roadmap',
    'developer roadmaps',
    'developer roadmap',
    'how to become a developer',
    ...[
      'frontend developer',
      'sre',
      'devops',
      'android developer',
      'dba',
      'blockchain developer',
      'qa',
      'qa engineer',
      'software architect',
      'asp.net core developer',
      'react developer',
      'angular developer',
      'vue developer',
      'node.js developer',
      'javascript developer',
      'python developer',
      'go developer',
      'java developer',
      'design system',
      'software design',
      'graphql',
    ].flatMap((roadmapKeyword) => [
      `${roadmapKeyword} roadmap`,
      `${roadmapKeyword} roadmap 2023`,
    ]),
  ],
};
