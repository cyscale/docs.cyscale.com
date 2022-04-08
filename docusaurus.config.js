// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cyscale Cloud Platform',
  tagline:
    'Explore what Cyscale Cloud Platform is, how it works, and when to use it',
  url: 'https://docs.cyscale.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cyscale',
  projectName: 'docs.cyscale.com',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: false,
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content:
            'cloud security, documentation, cspm, cloud compliance, aws security, azure security, gcp security',
        },
      ],
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'Cyscale Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'https://app.cyscale.com/',
            label: 'Sign In',
            position: 'right',
            className: 'button button--primary white-text',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Intro',
                to: '/',
              },
              {
                label: 'Getting Started',
                to: '/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                to: 'https://www.linkedin.com/company/cyscale',
              },
              {
                label: 'Twitter',
                to: 'https://twitter.com/cyscale',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://cyscale.com/blog/',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/cyscale',
              },
              {
                label: 'Status',
                to: 'https://status.cyscale.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cyscale Limited`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        disableSwitch: true,
      },
    }),
};

module.exports = config;
