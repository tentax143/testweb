import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/section-heading";
import { Card, CardContent } from "../ui/card";
import { cn } from "../../lib/utils";

const testimonials = [
  {
    quote:
      "My internship at TechOrbit was a game-changer for my career. The hands-on experience and mentorship I received helped me land my dream job at a top tech company.",
    author: "Alex Johnson",
    role: "Former Web Development Intern",
    image: "https://pixabay.com/get/gcdb9ce10cb0c5fb397c472803cc1208b35de681700c0421b3145783238eebfecf90a77d697d013f4accb01fe1a1b07d232c4c8311e569553d1a3e397b537aabb_1280.jpg"
  },
  {
    quote:
      "The project-based learning approach at TechOrbit gave me real-world skills that I couldn't get from classroom learning alone. The team was supportive and the tech stack was cutting-edge.",
    author: "Samantha Lee",
    role: "Data Science Intern",
    image: "https://pixabay.com/get/gbb4fbf9850d593815c8b5866a2721630253da5c1b2215fcb6d8e9b7f2eebdf3d0f2e2ce47547c4b8adcd3c132cd8e48b59af8f55f26156fe031cb17cbf07923b_1280.jpg"
  },
  {
    quote:
      "TechOrbit's internship program offered me the perfect balance of structure and freedom. I was able to contribute to meaningful projects while learning from experienced professionals.",
    author: "Marcus Rivera",
    role: "Mobile App Development Intern",
    image: "https://pixabay.com/get/g858a287fff91f67f19c7a73bd9acd608ae4250e574e9776ce2e6b46e931c1e20bc9dee1be9558fc49ab11bda423cc30b606ab77500e6d3961771acfe4ca8d710_1280.jpg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="What Our Interns Say"
          subtitle="Hear from past interns about their experiences and how TechOrbit helped launch their careers."
        />
        
        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: activeIndex === index ? 1 : 0,
                scale: activeIndex === index ? 1 : 0.9,
                display: activeIndex === index ? "block" : "none"
              }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Card className="border">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary/20 mb-4"
                      >
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                      </svg>
                      
                      <p className="text-lg md:text-xl mb-6 italic text-muted-foreground">
                        "{testimonial.quote}"
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          
          {/* Testimonial navigation dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  activeIndex === index ? "bg-primary" : "bg-muted"
                )}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
