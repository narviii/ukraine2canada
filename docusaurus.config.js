// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ukraine2Canada',
  tagline: 'Война в Украине',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ukraine2canada', // Usually your GitHub org/user name.
  projectName: 'ukraine2canada', // Usually your repo name.
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en', 'uk-ua']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Serve the docs at the site's root
          /* other docs plugin options */
          // Please change this to your repo.
          editUrl: 'https://github.com/narviii/ukraine2canada/tree/master',
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
      navbar: {
        title: 'Ukraine2Canada',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'readme',
            position: 'left',
            label: 'Documents',
          },
          
          {
            href: 'https://github.com/narviii/ukraine2canada',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          
          {
            title: 'Contacts',
            items: [
              {
                label: 'Created by Dasha Generalova',
                href: 'https://t.me/dariageneralova',
              },
            ],
          },
          {
            
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ukraine2Canada. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
