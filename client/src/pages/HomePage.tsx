import { Helmet } from "react-helmet-async";
import Hero from "../components/home/Hero";
import Benefits from "../components/home/Benefits";
import CTASection from "../components/home/CTASection";
import Footer from "../components/common/Footer";
import { useEffect } from "react";
import { useAudio } from "../lib/stores/useAudio";

const HomePage = () => {
  const { backgroundMusic, isMuted } = useAudio();
  
  // Play background music when the component mounts
  useEffect(() => {
    if (backgroundMusic && !isMuted) {
      backgroundMusic.play().catch((error) => {
        console.error("Failed to start background music:", error);
      });
    }
    
    return () => {
      if (backgroundMusic) {
        backgroundMusic.pause();
      }
    };
  }, [backgroundMusic, isMuted]);
  
  return (
    <>
      <Helmet>
        <title>TechOrbit | Empowering Student Internships</title>
        <meta name="description" content="TechOrbit offers cutting-edge technology internships to launch your tech career. Apply today for hands-on experience in web development, mobile apps, data science and more." />
      </Helmet>
      
      <main>
        <Hero />
        <Benefits />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
