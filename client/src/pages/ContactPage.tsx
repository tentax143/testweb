import { Helmet } from "react-helmet-async";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import MapSection from "../components/contact/MapSection";
import Footer from "../components/common/Footer";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact TechOrbit | Apply for Internships</title>
        <meta name="description" content="Get in touch with TechOrbit to apply for internships or learn more about our programs. Visit our office at Ramco Institute of Technology, Rajapalayam or submit your application online." />
      </Helmet>
      
      <main>
        <ContactHero />
        
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Contact form */}
              <ContactForm />
              
              {/* Map and contact info */}
              <MapSection />
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default ContactPage;
