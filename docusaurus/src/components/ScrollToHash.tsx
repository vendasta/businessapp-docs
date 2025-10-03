import {useEffect} from 'react';
import {useLocation} from '@docusaurus/router';

const SCROLL_RETRY_MS = 150;
const MAX_ATTEMPTS = 3;

function scrollToId(hash: string) {
  if (!hash) {
    return false;
  }

  const id = hash.startsWith('#') ? hash.slice(1) : hash;
  const target = document.getElementById(id);
  if (!target) {
    return false;
  }

  requestAnimationFrame(() => {
    target.scrollIntoView({behavior: 'smooth', block: 'start'});
  });

  return true;
}

export default function ScrollToHash(): null {
  const {hash} = useLocation();

  useEffect(() => {
    let attempts = 0;
    let cancelled = false;

    const tryScroll = () => {
      if (cancelled) {
        return;
      }

      const success = scrollToId(hash);
      attempts += 1;

      if (!success && hash && attempts < MAX_ATTEMPTS) {
        window.setTimeout(tryScroll, SCROLL_RETRY_MS);
      }
    };

    tryScroll();

    return () => {
      cancelled = true;
    };
  }, [hash]);

  return null;
}
