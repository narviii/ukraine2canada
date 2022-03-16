
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/uk-ua/__docusaurus/debug',
    component: ComponentCreator('/uk-ua/__docusaurus/debug','597'),
    exact: true
  },
  {
    path: '/uk-ua/__docusaurus/debug/config',
    component: ComponentCreator('/uk-ua/__docusaurus/debug/config','e7f'),
    exact: true
  },
  {
    path: '/uk-ua/__docusaurus/debug/content',
    component: ComponentCreator('/uk-ua/__docusaurus/debug/content','356'),
    exact: true
  },
  {
    path: '/uk-ua/__docusaurus/debug/globalData',
    component: ComponentCreator('/uk-ua/__docusaurus/debug/globalData','faf'),
    exact: true
  },
  {
    path: '/uk-ua/__docusaurus/debug/metadata',
    component: ComponentCreator('/uk-ua/__docusaurus/debug/metadata','08e'),
    exact: true
  },
  {
    path: '/uk-ua/__docusaurus/debug/registry',
    component: ComponentCreator('/uk-ua/__docusaurus/debug/registry','75e'),
    exact: true
  },
  {
    path: '/uk-ua/__docusaurus/debug/routes',
    component: ComponentCreator('/uk-ua/__docusaurus/debug/routes','c10'),
    exact: true
  },
  {
    path: '/uk-ua/markdown-page',
    component: ComponentCreator('/uk-ua/markdown-page','573'),
    exact: true
  },
  {
    path: '/uk-ua/',
    component: ComponentCreator('/uk-ua/','266'),
    routes: [
      {
        path: '/uk-ua/',
        component: ComponentCreator('/uk-ua/','f05'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
