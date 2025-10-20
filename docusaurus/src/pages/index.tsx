import React, { useEffect } from 'react';
import { Redirect } from '@docusaurus/router';

export default function Home(): JSX.Element {
  // Redirect to the first product (Business App) by default
  return <Redirect to="/businessapp/" />;
}

