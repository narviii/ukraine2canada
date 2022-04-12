// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UA to Canada',
  tagline:'Ресурс посвященный эммиграции в Канаду из Украины',
  url: 'https://ua2canada.info',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'UA to Canada', // Usually your GitHub org/user name.
  projectName: 'UA to Canada', // Usually your repo name.
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru']
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
          //editUrl: 'https://github.com/narviii/ukraine2canada/tree/master',
        },
        blog: false,
        googleAnalytics: {
          trackingID: 'UA-39274880-6',
          anonymizeIP: true,
        },
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
        title: 'UA to Canada',
        logo: {
          alt: 'My Site Logo',
          src: 'img/can2ukr.jpeg',
        },
        items: [
          {
            type: 'doc',
            docId: 'cuaet',
            position: 'left',
            label: 'Информация по материалам чата',
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
            title: 'Links',
            items: [
              {
                label: 'UA to Canada. Telegram channel.',
                href: 'https://t.me/UAtoCanada',
              },
              
            ],
          },
          {
            
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UA to Canada. Built with magic by Vlad Sofronov.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
