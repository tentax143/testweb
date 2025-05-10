import { motion } from "framer-motion";
import Scene from "../../lib/3d/Scene";

const ContactHero = () => {
  return (
    <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center overflow-hidden">
      {/* 3D background */}
      <Scene interactive={false} showSphere={false} cameraPosition={[0, 0, 4]} />
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-gradient">Contact</span> Us
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Ready to launch your tech career? Reach out to us to apply for an internship or to learn more about our programs.
          </motion.p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default ContactHero;
