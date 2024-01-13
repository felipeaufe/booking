// import { device } from '@assets/styled/media-query';
import { useEffect, useState } from 'react';
import { device } from '@assets/styled/media-query';

const query = `screen and (min-width: 1px) and ${device.mobileL}`;

/**
 *
 * @param queries List of queries to match
 * @returns Boolean value telling if the passed query/queries is a matching.
 */
function useMediaQuery(): boolean {
  const supportMatchMedia =
    typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';

  const [match, setMatch] = useState(false);

  useEffect(() => {
    let active = true;
    if (!supportMatchMedia) return undefined;

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
  const isMobile = useMediaQuery();

  return {
    isMobile,
    isDesktop: !isMobile,
  };
}

export function getStaticViewport() {
  const supportMatchMedia =
    typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';

  let isMobile = false;

  if (supportMatchMedia) {
    isMobile = window.matchMedia(query).matches;
  }

  return {
    isMobile,
    isDesktop: !isMobile,
  };
}
