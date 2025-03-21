// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const math = require('remark-math')
const katex = require('rehype-katex')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BeraBook',
  tagline: 'Documentation and Guides',
  url: 'https://docs.berabook.fun',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          id: 'developers',
          path: 'docs/developers',
          routeBasePath: 'developers/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          editUrl: 'https://github.com/BeraBook/docs/tree/main/',
          includeCurrentVersion: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          filename: 'sitemap.xml',
        },
      },
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/twitter_card_bg.jpg',
      prism: {
        additionalLanguages: ['solidity'],
      },
      navbar: {
        title: 'BeraBook Docs',
        logo: {
          alt: 'BeraBook',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/concepts/overview',
            label: 'Concepts',
            position: 'left',
          },
          {
            to: '/developers/integration-guide/overview',
            label: 'Developers',
            position: 'left',
          },
          {
            label: 'Brand Kit',
            to: 'https://berabook.notion.site/Brand-Kit-165394942ff88033bf66c30979a9d28b',
            position: 'right',
            className: 'persistent',
          },
          {
            href: 'https://github.com/BeraBook',
            label: 'GitHub',
            position: 'right',
            className: 'persistent',
          },
        ],
      },
      footer: {
        // style: "dark",
        links: [
          {
            title: 'Developers',
            items: [
              {
                label: 'Brand Kit',
                href: 'https://berabook.notion.site/Brand-Kit-165394942ff88033bf66c30979a9d28b',
              },
            ],
          },
          {
            title: 'Github',
            items: [
              {
                label: '@BeraBook',
                href: 'https://github.com/BeraBook',
              }
            ],
          },
          {
            title: 'Product',
            items: [
              {
                label: 'Home',
                href: 'https://www.berabook.fun/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/bera-book',
              },
              {
                label: 'Twitter',
                href: 'https://x.com/BeraBook',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/BeraBook',
              }
            ],
          },
        ],
        // copyright: `unlicensed`,
      },
      colorMode: {
        // "light" | "dark"
        defaultMode: 'light',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: true,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded defaultMode
        respectPrefersColorScheme: false,
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'concepts',
        path: 'docs/concepts',
        routeBasePath: 'concepts/',
        remarkPlugins: [math],
        rehypePlugins: [katex],
        includeCurrentVersion: true,
      },
    ],
  ],
}

module.exports = config
