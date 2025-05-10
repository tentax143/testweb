import { Helmet } from "react-helmet-async";
import AboutHero from "../components/about/AboutHero";
import Mission from "../components/about/Mission";
import Team from "../components/about/Team";
import CTASection from "../components/home/CTASection";
import Footer from "../components/common/Footer";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About TechOrbit | Our Mission & Team</title>
        <meta name="description" content="Learn about TechOrbit's mission to empower the next generation of tech talent through immersive internship experiences and meet our experienced team." />
      </Helmet>
      
      <main>
        <AboutHero />
        <Mission />
        <Team />
        
        <CTASection 
          title="Join Our Innovative Team"
          description="Apply for an internship at TechOrbit and be part of a team that's shaping the future of technology through innovation and practical experience."
          primaryButtonText="Apply Now"
          secondaryButtonText="View Programs"
        />
        
        <Footer />
      </main>
    </>
  );
};

export default AboutPage;
