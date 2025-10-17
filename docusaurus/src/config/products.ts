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
    logo: '/img/logo.png',
    sidebarId: 'businessappSidebar',
    path: '/businessapp/',
    tagline: 'Customer acquisition and engagement platform for your business',
  },
  {
    id: 'adintel',
    name: 'Advertising Intelligence',
    logo: '/img/adintel-logo.svg',
    sidebarId: 'adintelSidebar',
    path: '/adintel/',
    tagline: 'Unified PPC reporting for easy ad performance insights',
  },
  {
    id: 'amps',
    name: 'AMPS',
    logo: '/img/logo.svg',
    sidebarId: 'ampsSidebar',
    path: '/amps/intro',
    tagline: 'Advertising Management Platform',
  },
  {
    id: 'localseo',
    name: 'Local SEO',
    logo: '/img/logo.png',
    sidebarId: 'localseoSidebar',
    path: '/localseo/',
    tagline: 'Boost your clients\' local rankings with AI-powered software',
  },
  {
    id: 'repman',
    name: 'Reputation Management',
    logo: '/img/repman-logo.png',
    sidebarId: 'repmanSidebar',
    path: '/repman/',
    tagline: 'AI-powered review management software',
  },
  {
    id: 'socialmarketing',
    name: 'Social Marketing',
    logo: '/img/social-logo.png',
    sidebarId: 'socialmarketingSidebar',
    path: '/socialmarketing/',
    tagline: 'AI-Powered Social Media Management Software',
  },
  {
    id: 'website',
    name: 'WordPress Hosting',
    logo: '/img/website-pro.svg',
    sidebarId: 'websiteSidebar',
    path: '/website/',
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

export const getProductByPath = (pathname: string): Product | undefined => {
  const ensureTrailingSlash = (value: string): string =>
    value.endsWith('/') ? value : `${value}/`;

  const normalizedPath = ensureTrailingSlash(pathname);

  return products.find((product) => {
    const productPath = ensureTrailingSlash(product.path);
    return normalizedPath.startsWith(productPath);
  });
};
