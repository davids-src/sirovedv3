/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://siroved.hu',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'Anthropic-ai',
        allow: '/',
      },
    ],
  },
}
