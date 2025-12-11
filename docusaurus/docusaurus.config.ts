import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const legacyBusinessAppSections = [
  'administration',
  'ai',
  'automations',
  'campaigns',
  'conversations',
  'crm',
  'executivereport',
  'store',
  'getting-started-with-business-app',
];

const config: Config = {
  title: 'Product Help & Documentation',
  tagline: 'Your guide to getting the most out of your products',
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

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

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
    // Google Tag Manager script (mirrors partnercenter-docs approach)
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
      },
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-1Y49QBYD4L');`,
    },
    // Webchat widget script (simple approach)
    {
      tagName: 'script',
      attributes: {
        src: 'https://cdn.apigateway.co/webchat-client..prod/sdk.js',
        'data-widget-id': 'fdb6e70b-af9a-11f0-bff6-7afa397fdb2d',
        'data-cookieconsent': 'ignore',
        defer: 'true',
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
        docs: {
          sidebarPath: './sidebars.ts',
          // Serve docs at site root so "/" shows the docs with sidebar
          routeBasePath: '/',
          // Surface git metadata so readers can see when pages were last updated
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // Specific redirects for renamed paths
          {
            from: '/docs/ai/ai-workforce/ai-receptionist',
            to: '/business-app/ai/ai-workforce/ai-chat-receptionist/',
          },
          {
            from: '/docs/ai/ai-workforce/ai-receptionist/',
            to: '/business-app/ai/ai-workforce/ai-chat-receptionist/',
          },
          {
            from: '/ai/ai-workforce/ai-receptionist',
            to: '/business-app/ai/ai-workforce/ai-chat-receptionist/',
          },
          {
            from: '/ai/ai-workforce/ai-receptionist/',
            to: '/business-app/ai/ai-workforce/ai-chat-receptionist/',
          },
          // Legacy Listing Sync permalink -> new Local SEO path
          {
            from: '/vendasta-products/local-seo/listing-sync',
            to: '/local-seo/listing-sync/',
          },
          {
            from: '/vendasta-products/local-seo/listing-sync/',
            to: '/local-seo/listing-sync/',
          },
          // Legacy section redirects - redirect top-level paths only
          // Note: Include both trailing slash and non-trailing slash versions
          {
            from: '/businessapp',
            to: '/business-app/',
          },
          {
            from: '/businessapp/',
            to: '/business-app/',
          },
          {
            from: '/adintel',
            to: '/ad-intel/',
          },
          {
            from: '/adintel/',
            to: '/ad-intel/',
          },
          {
            from: '/localseo',
            to: '/local-seo/',
          },
          {
            from: '/localseo/',
            to: '/local-seo/',
          },
          {
            from: '/reputationmanagement',
            to: '/reputation-management/',
          },
          {
            from: '/reputationmanagement/',
            to: '/reputation-management/',
          },
          {
            from: '/socialmarketing',
            to: '/social-marketing/',
          },
          {
            from: '/socialmarketing/',
            to: '/social-marketing/',
          },
          {
            from: '/wordpresshosting',
            to: '/wordpress-hosting/',
          },
          {
            from: '/wordpresshosting/',
            to: '/wordpress-hosting/',
          },
        ],
        createRedirects(existingPath) {
          // Only create redirects for business-app paths
          if (!existingPath.startsWith('/business-app/')) {
            return undefined;
          }

          const remainder = existingPath.replace('/business-app/', '');
          const [section] = remainder.split('/');
          
          // Only create redirects for legacy business app sections
          if (!legacyBusinessAppSections.includes(section)) {
            return undefined;
          }

          // Create redirects from both root-level and /docs/ paths
          // Handle both trailing slash and non-trailing slash versions
          const legacyPath = `/${remainder}`;
          const docsLegacyPath = `/docs/${remainder}`;
          const redirects = [legacyPath];
          
          // Add /docs/ version if different
          if (docsLegacyPath !== legacyPath) {
            redirects.push(docsLegacyPath);
          }

          return redirects;
        },
      },
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
      title: 'Product Help & Documentation',
      logo: {
        alt: 'Business App logo',
        src: 'img/Business App.svg',
      },
      items: [],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: '/business-app/getting-started-with-business-app',
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
