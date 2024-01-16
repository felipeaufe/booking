import { useEffect, useState } from 'react';
import { device } from '@assets/styled/media-query';

/**
 *
 * @param queries List of queries to match
 * @returns Boolean value telling if the passed query/queries is a matching.
 */
function useMediaQuery(...queries: string[]): boolean {
  const supportMatchMedia =
    typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';

  const [match, setMatch] = useState(false);

  useEffect(() => {
    let active = true;
    if (!supportMatchMedia) return undefined;

    const query = queries.join();
    const queryList = window.matchMedia(query);

    function updateMatch() {
      if (active) setMatch(queryList.matches);
    }

    updateMatch();
    queryList.addEventListener('change', updateMatch);

    return () => {
      active = false;
      queryList.removeEventListener('change', updateMatch);
    };
  }, [supportMatchMedia]);

  return match;
}

export function useViewport() {
  const isMobile = useMediaQuery(`screen and (min-width: 1px) and ${device.mobileL}`);
  const isTablet = useMediaQuery(`screen and (min-width: 1px) and ${device.tablet}`);

  return {
    isMobile,
    isTablet,
    isDesktop: !isMobile,
  };
}