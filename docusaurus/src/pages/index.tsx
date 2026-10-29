import React from 'react';
import { Redirect } from '@docusaurus/router';

// Dev server only: production builds exclude this page (see `pages.exclude`
// in docusaurus.config.ts) because nginx 301s "/" to /business-app/.
export default function Home(): JSX.Element {
  return <Redirect to="/business-app/" />;
}
