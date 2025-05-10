import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAudio } from "../../lib/stores/useAudio";
import { Button } from "../ui/button";
import Scene from "../../lib/3d/Scene";

const Hero = () => {
  const { playSuccess } = useAudio();
  const heroRef = useRef<HTMLDivElement | null>(null);
  
  // Calculate scroll progress with improved performance
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (heroRef.current) {
            const scrollY = window.scrollY;
            const heroHeight = heroRef.current.offsetHeight || 0;
            const opacity = 1 - Math.min(1, scrollY / ((heroHeight || 1) * 0.8));
            heroRef.current.style.opacity = opacity.toString();
          }
          
          ticking = false;
        });
        
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden" ref={heroRef}>
      {/* 3D background */}
      <Scene interactive={true} cameraPosition={[0, 0, 5]} />
      
      {/* Content */}
      <div className="container-custom relative z-10 pointer-events-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Launch Your Tech Career with{" "}
            <span className="text-gradient">TechOrbit</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8"
          >
            Gain practical experience through our cutting-edge internship programs
            and orbit your way into the tech industry.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" asChild onClick={() => playSuccess()}>
              <Link to="/services">
                Explore Programs
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">
                Apply Now
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-bounce"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
