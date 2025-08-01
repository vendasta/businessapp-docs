import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Business App',
  tagline: 'Customer acquisition and engagement platform for your business',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.businessapp.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vendasta', // Usually your GitHub org/user name.
  projectName: 'businessapp-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Custom head tags for Cookiebot integration
  headTags: [
    {
      tagName: 'script',
      attributes: {
        id: 'Cookiebot',
        src: 'https://consent.cookiebot.com/uc.js',
        'data-cbid': '18defc9c-f3d9-498d-b1d8-469fdf619133',
        'data-blockingmode': 'auto',
        type: 'text/javascript',
      },
    },
  ],

  // Enable faster builds with Rspack bundler and persistent cache
  future: {
    experimental_faster: {
      rspackBundler: true,
      rspackPersistentCache: true,
    },
  },

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
        // ← GA4 configuration
        gtag: {
          trackingID: 'G-1Y49QBYD4L',  // your GA4 Measurement ID
          anonymizeIP: true,           // optional: set to false to disable
        },
  
        docs: {
          sidebarPath: './sidebars.ts',
          // editUrl:
          //  'https://github.com/vendasta/businessapp-docs',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
      algolia: {
        // The application ID provided by Algolia
        appId: '8SYZR207TF',

        // Public API key: it is safe to commit it
        apiKey: 'faba3d7ba0c2f3489cccf964cf02dae6',

        indexName: 'businessapp',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'docs.businessapp\\.io',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
    // Social card used for sharing previews
    image: 'img/businessapp-docs-social-share.png',
    navbar: {
      title: 'Business App',
      logo: {
        alt: 'Business App Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Overview',
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
              label: 'Getting started',
              to: '/docs/category/business-app',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Cookie Declaration',
              to: '/cookie-declaration',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
