import { motion } from "framer-motion";
import Scene from "../../lib/3d/Scene";

const AboutHero = () => {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center overflow-hidden">
      {/* 3D background */}
      <Scene interactive={false} showSphere={false} cameraPosition={[0, 0, 4]} />
      
      {/* Content */}
      <div className="container-custom relative z-10 pointer-events-auto">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About <span className="text-gradient">TechOrbit</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            We're a tech company dedicated to empowering the next generation of tech talent through immersive internship experiences and cutting-edge technology.
          </motion.p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default AboutHero;
