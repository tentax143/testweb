import { Helmet } from "react-helmet-async";
import ServicesHero from "../components/services/ServicesHero";
import InternshipPrograms from "../components/services/InternshipPrograms";
import TechStack from "../components/services/TechStack";
import CTASection from "../components/home/CTASection";
import Footer from "../components/common/Footer";

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Internship Programs | TechOrbit</title>
        <meta name="description" content="Explore TechOrbit's diverse range of technology internship programs including web development, mobile apps, data science, DevOps, UI/UX design, and blockchain." />
      </Helmet>
      
      <main>
        <ServicesHero />
        <InternshipPrograms />
        <TechStack />
        
        <CTASection
          title="Ready to Build Your Tech Future?"
          description="Apply now for one of our cutting-edge internship programs and gain the experience that will set you apart in the tech industry."
          primaryButtonText="Apply Today"
          secondaryButtonText="Contact Us"
          primaryButtonLink="/contact"
          secondaryButtonLink="/contact"
        />
        
        <Footer />
      </main>
    </>
  );
};

export default ServicesPage;
