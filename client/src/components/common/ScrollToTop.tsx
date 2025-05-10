import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component scrolls the window to the top on route changes
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // For modern browsers
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
    } catch (error) {
      // Fallback for older browsers
      window.scrollTo(0, 0);
    }
    
    // Additional fallback for Safari
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [pathname]);

  // This component doesn't render anything
  return null;
};

export default ScrollToTop;