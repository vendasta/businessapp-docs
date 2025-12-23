export interface Product {
  id: string;
  name: string;
  logo: string;
  sidebarId: string;
  path: string;
  tagline?: string;
}

export const products: Product[] = [
  {
    id: 'businessapp',
    name: 'Business App',
    logo: '/img/Business App.svg',
    sidebarId: 'businessappSidebar',
    path: '/business-app/',
    tagline: 'Customer acquisition and engagement platform for your business',
  },
  {
    id: 'adintel',
    name: 'Advertising Intelligence',
    logo: '/img/Advertising-Intelligence.svg',
    sidebarId: 'adintelSidebar',
    path: '/ad-intel/',
    tagline: 'Unified PPC reporting for easy ad performance insights',
  },
  {
    id: 'localseo',
    name: 'Local SEO',
    logo: '/img/Local-SEO.svg',
    sidebarId: 'localseoSidebar',
    path: '/local-seo/',
    tagline: "Boost your clients' local rankings with AI-powered software",
  },
  {
    id: 'repman',
    name: 'Reputation AI',
    logo: '/img/Reputation-Management.svg',
    sidebarId: 'repmanSidebar',
    path: '/reputation-management/',
    tagline: 'AI-powered review management software',
  },
  {
    id: 'socialmarketing',
    name: 'Social Marketing',
    logo: '/img/Social-Marketing.svg',
    sidebarId: 'socialmarketingSidebar',
    path: '/social-marketing/',
    tagline: 'AI-Powered Social Media Management Software',
  },
  {
    id: 'website',
    name: 'WordPress Hosting',
    logo: '/img/Wordpress-Hosting.png',
    sidebarId: 'websiteSidebar',
    path: '/wordpress-hosting/',
    tagline: 'Build and manage beautiful, professional websites',
  },
  {
    id: 'yesware',
    name: 'Yesware',
    logo: '/img/yesware-logo.png',
    sidebarId: 'yeswareSidebar',
    path: '/yesware/',
    tagline: 'Sales Engagement and Email Marketing Platform',
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

const ensureTrailingSlash = (value: string): string =>
  value.endsWith('/') ? value : `${value}/`;

export const getProductByPath = (pathname: string): Product | undefined => {
  const normalizedPath = ensureTrailingSlash(pathname);

  return products.find((product) =>
    normalizedPath.startsWith(ensureTrailingSlash(product.path)),
  );
};
