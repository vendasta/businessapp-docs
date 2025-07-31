import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function CookieDeclaration(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    // Create and append the Cookiebot declaration script
    const script = document.createElement('script');
    script.id = 'CookieDeclaration';
    script.src = 'https://consent.cookiebot.com/18defc9c-f3d9-498d-b1d8-469fdf619133/cd.js';
    script.type = 'text/javascript';
    script.async = true;

    // Find the container and append the script
    const container = document.getElementById('cookie-declaration-container');
    if (container) {
      container.appendChild(script);
    }

    // Cleanup function to remove the script when component unmounts
    return () => {
      const existingScript = document.getElementById('CookieDeclaration');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <Layout
      title="Cookie Declaration"
      description="Cookie Declaration for Business App documentation site">
      <main>
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <h1>Cookie Declaration</h1>
              <p>
                This page contains information about the cookies used on this website.
                The declaration below is automatically updated by Cookiebot to reflect
                the current cookie usage on our site.
              </p>
              <div id="cookie-declaration-container">
                {/* The Cookiebot declaration script will be injected here */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}