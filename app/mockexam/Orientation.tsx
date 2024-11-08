import { useState, useEffect } from 'react';

function useOrientation() {
  const [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    const updateOrientation = () => {
      setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
    };

    // Set initial orientation
    updateOrientation();

    // Add event listener
    window.addEventListener("resize", updateOrientation);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", updateOrientation);
  }, []);

  return isPortrait;
}

export default useOrientation;
