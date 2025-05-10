import { motion } from "framer-motion";
import SectionHeading from "../ui/section-heading";
import { Card, CardContent } from "../ui/card";
import { Canvas } from "@react-three/fiber";
import OrbitModel from "../../lib/3d/OrbitModel";

const Mission = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading
              title="Our Mission"
              subtitle="Empowering future tech leaders through practical experience and innovation."
              align="left"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-muted/30 border">
                <CardContent className="p-6">
                  <p className="mb-4">
                    At TechOrbit, we believe that practical experience is the key to success in the fast-paced tech industry. Our mission is to bridge the gap between academic education and industry demands by providing hands-on internship opportunities that prepare students for real-world challenges.
                  </p>
                  
                  <p className="mb-4">
                    We're committed to fostering a diverse and inclusive environment where innovation thrives and every intern has the opportunity to contribute meaningfully to projects that matter.
                  </p>
                  
                  <p>
                    Through mentorship, collaborative projects, and cutting-edge technologies, we aim to launch the careers of the next generation of tech leaders who will shape the future of the digital landscape.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 mt-6"
            >
              <Card className="border">
                <CardContent className="p-4">
                  <div className="text-4xl font-bold text-primary mb-2">300+</div>
                  <p className="text-muted-foreground">Internships Completed</p>
                </CardContent>
              </Card>
              
              <Card className="border">
                <CardContent className="p-4">
                  <div className="text-4xl font-bold text-primary mb-2">85%</div>
                  <p className="text-muted-foreground">Employment Rate</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <div className="order-1 lg:order-2 h-[400px] relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full h-full"
            >
              <div className="relative w-full h-full">
                <Canvas
                  camera={{ position: [0, 0, 5], fov: 75 }}
                  gl={{ antialias: true, alpha: true }}
                >
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 5]} intensity={1} />
                  <OrbitModel position={[0, 0, 0]} scale={1.2} />
                </Canvas>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
