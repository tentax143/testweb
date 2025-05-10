import { motion } from "framer-motion";
import SectionHeading from "../ui/section-heading";

const TechStack = () => {
  const technologies = [
    {
      category: "Frontend",
      items: [
        {
          name: "React",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="2" />
              <path d="M12 19c4.1-4.1 4.1-11 0-15" />
              <path d="M19 12c-4.1 4.1-11 4.1-15 0" />
              <circle cx="12" cy="12" r="9" strokeDasharray="41" strokeDashoffset="0" />
            </svg>
          )
        },
        {
          name: "Angular",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16.13 15.13 18 21l-5-1-5 1 1.87-5.87" />
              <path d="m12 3-9 3 2 15.5L12 18l7 3.5L21 6l-9-3Z" />
              <path d="m7 10 5-3 5 3-5 7-5-7Z" />
            </svg>
          )
        },
        {
          name: "Vue",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 3h-3.5L12 7.5 9.5 3H6l6 11 6-11Z" />
              <path d="m12 21-8.96-16h2.12l6.84 12 6.84-12h2.12L12 21Z" />
            </svg>
          )
        }
      ]
    },
    {
      category: "Backend",
      items: [
        {
          name: "Node.js",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22v-9" />
              <path d="M15.17 4.24c-1.94-1.12-4.4-1.12-6.34 0L4.24 6.98c-1.94 1.12-3.12 3.17-3.12 5.4v5c0 2.23 1.18 4.28 3.12 5.4l4.59 2.74c1.94 1.12 4.4 1.12 6.34 0l4.59-2.74c1.94-1.12 3.12-3.17 3.12-5.4v-5c0-2.23-1.18-4.28-3.12-5.4l-4.59-2.74Z" />
              <path d="M12 8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8" />
            </svg>
          )
        },
        {
          name: "Python",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11.5 2h1c2.2 0 4 1.8 4 4v2h-2a2 2 0 0 0-2 2v2h-2v-2a2 2 0 0 0-2-2h-2V6c0-2.2 1.8-4 4-4Z" />
              <path d="M14.5 10h1c2.2 0 4 1.8 4 4v2h-2a2 2 0 0 0-2 2v2h-2v-2a2 2 0 0 0-2-2h-2v-2c0-2.2 1.8-4 4-4Z" />
            </svg>
          )
        },
        {
          name: "Java",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 8h16v1" />
              <path d="M6 4h8" />
              <path d="M10 4v6" />
              <path d="M4 7c0-1.7 1.3-3 3-3h5c1.7 0 3 1.3 3 3v5c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7Z" />
              <path d="m11 15.5.5.5" />
              <path d="M18 20c0-1.7-1.3-3-3-3h-1v-1" />
              <path d="M11.5 20h5" />
            </svg>
          )
        }
      ]
    },
    {
      category: "Mobile",
      items: [
        {
          name: "React Native",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="2" />
              <path d="M12 19c4.1-4.1 4.1-11 0-15" />
              <path d="M19 12c-4.1 4.1-11 4.1-15 0" />
              <rect x="3.5" y="2" width="17" height="20" rx="2.5" ry="2.5" strokeDasharray="2 2" />
            </svg>
          )
        },
        {
          name: "Flutter",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 1.5h7.5c4.5 0 7 1 7 6v3c0 5-2.5 6-7 6H5" />
              <path d="M13.75 14.5H5" />
              <path d="M5 19.5h7" />
              <path d="M7.5 4.5v17" />
            </svg>
          )
        },
        {
          name: "Swift",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 14c.7 1.2.7 2.5-.1 3.5-1.4 1.7-4.5 1.2-5.5.3-2.5-2.2-5.5-1.5-5.5-1.5 2.4.8 4.3 2.3 5.5 3.8.4.5 1 1.3 1 2.3 0 .6-.4 1.3-1 1.5C14 24 9 22.3 5.5 19 4.5 14.8 7 11 10 8.5c1-1 2-1.5 2-1.5-3.5 6 .5 9 2 9.5 1.3-1.5 1.5-5.5-3-9.5 1.5 0 5 .5 7 4-1.5-6-6-7-6-7 0-.5.5-1.5 1.5-2 0 0 6 1.5 8.5 8" />
            </svg>
          )
        }
      ]
    }
  ];
  
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <SectionHeading
          title="Our Tech Stack"
          subtitle="Gain hands-on experience with the cutting-edge technologies that power the modern tech industry."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-lg border shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4">{tech.category}</h3>
                
                <div className="grid grid-cols-3 gap-4">
                  {tech.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex flex-col items-center justify-center text-center"
                    >
                      <div className="w-12 h-12 flex items-center justify-center text-primary mb-2">
                        {item.icon}
                      </div>
                      <span className="text-sm">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-6">
            And many more technologies across cloud, AI, data science, and blockchain domains.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
