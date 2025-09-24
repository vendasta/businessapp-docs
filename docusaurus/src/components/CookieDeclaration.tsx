import React, { useEffect } from 'react';

export default function CookieDeclaration(): JSX.Element {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'CookieDeclaration';
    script.src = 'https://consent.cookiebot.com/18defc9c-f3d9-498d-b1d8-469fdf619133/cd.js';
    script.type = 'text/javascript';
    script.async = true;

    const container = document.getElementById('cookie-declaration-container');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      const existingScript = document.getElementById('CookieDeclaration');
      if (existingScript) existingScript.remove();
    };
  }, []);

  return <div id="cookie-declaration-container" />;
}


