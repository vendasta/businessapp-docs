import {useEffect, useRef} from 'react';
import {useLocation} from '@docusaurus/router';

const SCROLL_RETRY_MS = 100;
const MAX_ATTEMPTS = 5;
const DOM_READY_DELAY = 50;

function scrollToId(hash: string) {
  if (!hash) {
    return false;
  }

  const id = hash.startsWith('#') ? hash.slice(1) : hash;
  const target = document.getElementById(id);
  if (!target) {
    return false;
  }

  // Check if element is visible and ready
  const rect = target.getBoundingClientRect();
  if (rect.top === 0 && rect.height === 0) {
    return false;
  }

  requestAnimationFrame(() => {
    target.scrollIntoView({behavior: 'smooth', block: 'start'});
  });

  return true;
}

export default function ScrollToHash(): null {
  const {hash} = useLocation();
  const initializedRef = useRef(false);
  const currentHashRef = useRef(hash);

  useEffect(() => {
    currentHashRef.current = hash;
  }, [hash]);

  useEffect(() => {
    if (initializedRef.current) {
      return;
    }

    initializedRef.current = true;
    let attempts = 0;
    let cancelled = false;

    const performScroll = () => {
      if (cancelled) {
        return;
      }

      const currentHash = currentHashRef.current;
      const success = scrollToId(currentHash);
      attempts += 1;

      if (!success && currentHash && attempts < MAX_ATTEMPTS) {
        // Use shorter delay for DOM readiness
        window.setTimeout(performScroll, SCROLL_RETRY_MS);
      }
    };

    // Handle both React router navigation and direct browser navigation
    const handleHashChange = () => {
      attempts = 0; // Reset attempts for new hash
      performScroll();
    };

    // Listen for browser hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Initial scroll attempt - use longer delay to ensure DOM is ready
    if (hash) {
      // For initial load, give DOM more time to be ready
      window.setTimeout(performScroll, DOM_READY_DELAY);
    }

    return () => {
      cancelled = true;
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []); // Only run once on mount

  return null;
}
