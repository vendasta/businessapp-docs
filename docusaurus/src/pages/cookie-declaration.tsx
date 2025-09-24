import React from 'react';
import Layout from '@theme/Layout';
import CookieDeclaration from '../components/CookieDeclaration';

export default function CookieDeclarationPage(): JSX.Element {
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
              <CookieDeclaration />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}