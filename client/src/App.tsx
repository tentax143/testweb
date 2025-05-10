import { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import Navbar from "./components/ui/navbar";
import { Button } from "./components/ui/button";
import { useAudio } from "./lib/stores/useAudio";
import ScrollToTop from "./components/common/ScrollToTop";
import { useSmoothScroll } from "./hooks/useScrollToTop";
import NotFound from "./pages/not-found";

// Lazy load pages
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

// Loading component
const Loading = () => (
  <div className="w-full h-screen flex flex-col items-center justify-center">
    <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin mb-4"></div>
    <h2 className="text-xl font-medium">Loading TechOrbit...</h2>
  </div>
);

function App() {
  const location = useLocation();
  const [domLoaded, setDomLoaded] = useState(false);
  const { setBackgroundMusic, toggleMute, isMuted } = useAudio();
  
  // Add smooth scrolling for anchor links
  useSmoothScroll();

  // Setup background audio on component mount
  useEffect(() => {
    const loadAudio = async () => {
      try {
        const backgroundMusic = new Audio("/sounds/background.mp3");
        backgroundMusic.loop = true;
        backgroundMusic.volume = 0.3;
        setBackgroundMusic(backgroundMusic);
        setDomLoaded(true);
      } catch (error) {
        console.error("Failed to load audio:", error);
        setDomLoaded(true);
      }
    };

    loadAudio();
  }, [setBackgroundMusic]);

  if (!domLoaded) {
    return <Loading />;
  }

  return (
    <>
      <ScrollToTop />
      
      {/* Sound toggle button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 z-50 rounded-full bg-background/80 backdrop-blur-sm"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5 6 9H2v6h4l5 4ZM22 9l-6 6M16 9l6 6"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5 6 9H2v6h4l5 4ZM15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14"/>
          </svg>
        )}
      </Button>

      {/* Navbar */}
      <Navbar />

      {/* Main content with page transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <Suspense fallback={<Loading />}>
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </motion.main>
      </AnimatePresence>
    </>
  );
}

export default App;
