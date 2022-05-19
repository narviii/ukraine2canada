/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar:
    [{
      type: 'link',
      label: '🗞 Новости', // The link label
      href: '/blog', // The internal path
    },
    {
      type: 'link',
      label: '⏳ Трекер сроков CUAET', // The link label
      href: 'https://track.ua2canada.info', // The external URL
    },
    { type: 'autogenerated', dirName: '.' },

    ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
