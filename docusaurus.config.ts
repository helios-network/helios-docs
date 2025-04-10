import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Helios Hub',
  tagline: 'All about the Helios Ecosystem to Learn how to Build and Innovate.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hub.helios.network/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'helios-network', // Usually your GitHub org/user name.
  projectName: 'helios-hub', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
        },
        blog: {
          path: 'articles',
          routeBasePath: 'articles',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      appId: 'IU9TP7H66Z',
      apiKey: '8523169bbcd386a82283474e47386dba',
      indexName: 'hub-helioschain',

      // Optional parameters:
      insights: true, // Enables click analytics
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Helios Hub',
      logo: {
        alt: 'Helios Network – Secure, Automated, and Interchain-Ready',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'learnSidebar',
          position: 'left',
          label: 'Learn',
        },
        {
          type: 'docSidebar',
          sidebarId: 'buildSidebar',
          position: 'left',
          label: 'Build',
        },
        {
          type: 'docSidebar',
          sidebarId: 'innovateSidebar',
          position: 'left',
          label: 'Innovate',
        },
        {
          type: 'docSidebar',
          sidebarId: 'testnetSidebar',
          position: 'left',
          label: 'Testnet',
        },
        {to: '/articles', label: 'Articles', position: 'left'},
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/helios-network',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://helios-network.github.io/HIP',
          label: 'Helios Improvement Proposals (HIPs)',
          position: 'right'
        }
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Learn',
              to: '/docs/learn/intro/what-is-helios',
            },
            {
              label: 'Build',
              to: '/docs/build/running-a-node/system-requirements',
            },
            {
              label: 'Innovate',
              to: '/docs/innovate/building-with-helios/developing-dapps',
            },
            {
              label: 'Testnet',
              to: '/docs/testnet',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/AjpJnJxt5e',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/heliosblock',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Articles',
              to: '/articles',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/helios-network',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Helios Foundation. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.duotoneLight,
      darkTheme: prismThemes.duotoneDark,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    // [
    //   require.resolve('@cmfcmf/docusaurus-search-local'),
    //   {
    //     indexDocs: true,
    //     indexBlog: true,
    //     language: ['en'],
    //   },
    // ],
  ],
  
};

export default config;
