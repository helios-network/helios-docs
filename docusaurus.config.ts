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

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
       
        },
        blog: {
          path: 'articles',
          routeBasePath: 'articles',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
 
          // Useful options to enforce articlesging best practices
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
    colorMode: {
      defaultMode: "light",
      disableSwitch: true, // Prevents users from toggling dark mode
      respectPrefersColorScheme: false, // Ignores user OS dark mode settings
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
        {to: '/articles', label: 'Articles', position: 'left'},
        {
          href: 'https://github.com/helios-network',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://github.com/helios-network',
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
              to: '/docs/intro',
            },
            {
              label: 'Build',
              to: '/docs/intro',
            },
            {
              label: 'Innovate',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [

            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/heliosnetwork',
            },
            {
              label: 'Telegram',
              href: 'https://discordapp.com/invite/heliosnetwork',
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
};

export default config;
