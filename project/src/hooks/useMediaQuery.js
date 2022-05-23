import { useState, useEffect } from "react";

function useMediaQuery(query) {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    const mediaCheck = window.matchMedia(query);
    const updateMatch = () => setMatch(mediaCheck.matches);

    updateMatch();
    mediaCheck.addEventListener("change", updateMatch);

    return () => {
      mediaCheck.removeEventListener("change", updateMatch);
    };
  }, [query]);

  return match;
}

export default useMediaQuery;
