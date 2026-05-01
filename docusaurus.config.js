// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '香港癌症指南', 
  tagline: '為癌症患者及家屬提供的醫療與護理資訊', 
  favicon: 'img/docusaurus.png',

  future: {
    v4: true, 
  },

  url: 'https://lihkgchicancer.github.io', 
  baseUrl: '/my-cancer-guide/', 
  
  organizationName: 'lihkgchicancer', 
  projectName: 'my-cancer-guide', 
  trailingSlash: false, 

  onBrokenLinks: 'warn',

  // 🔽 暫時保留預設英文 🔽
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '香港癌症指南',
        logo: {
          alt: 'My Site Logo',
          src: 'img/docusaurus.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '癌症指南', // 這裡原本是 'Tutorial'，改名
          },
          {to: '/useful-links', label: 'Useful Links', position: 'left'},
          {
            href: 'https://github.com/lihkgchicancer/my-cancer-guide',
            label: 'GitHub',
            position: 'right',
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
                label: '癌症指南',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Lihkg 全港最大癌症/腫瘤/Cancer/照顧者/家人/Caregiver 圍爐區',
                href: 'https://lih.kg/3963035',
              },
              {
                label: '腫瘤科吳教恩醫師',
                href: 'https://www.youtube.com/@peterwu4845',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Useful Links',
                to: '/useful-links',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/lihkgchicancer/my-cancer-guide',
              },
            ],
          },
        ],
        copyright: `Developed by ${new Date().getFullYear()} 支仔`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
