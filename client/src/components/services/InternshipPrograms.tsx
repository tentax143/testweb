import { useNavigate } from "react-router-dom";
import SectionHeading from "../ui/section-heading";
import InternshipCard from "../ui/internship-card";
import { useAudio } from "../../lib/stores/useAudio";

const InternshipPrograms = () => {
  const navigate = useNavigate();
  const { playSuccess } = useAudio();
  
  const handleApply = () => {
    playSuccess();
    navigate("/contact");
  };
  
  const programs = [
    {
      icon: (
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
          className="text-primary"
        >
          <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
        </svg>
      ),
      title: "Web Development",
      description: "Learn modern frontend and backend technologies while building real-world web applications.",
      features: [
        "React, Angular, or Vue frontend",
        "Node.js or Python backend",
        "Database design and implementation",
        "API development and integration",
        "DevOps and deployment"
      ],
      featured: true
    },
    {
      icon: (
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
          className="text-primary"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      ),
      title: "Mobile App Development",
      description: "Create native and cross-platform mobile applications for iOS and Android.",
      features: [
        "React Native or Flutter",
        "UI/UX design principles",
        "State management",
        "Native device features integration",
        "App store deployment"
      ]
    },
    {
      icon: (
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
          className="text-primary"
        >
          <path d="M12 2H2v10h10V2ZM22 2h-8v10h8V2ZM12 14H2v8h10v-8ZM22 14h-8v8h8v-8Z" />
        </svg>
      ),
      title: "Data Science",
      description: "Analyze and extract insights from complex datasets using AI and machine learning techniques.",
      features: [
        "Python for data analysis",
        "Machine learning algorithms",
        "Data visualization",
        "Statistical analysis",
        "Big data technologies"
      ]
    },
    {
      icon: (
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
          className="text-primary"
        >
          <circle cx="7" cy="12" r="3" />
          <path d="M10 9v6" />
          <circle cx="17" cy="12" r="3" />
          <path d="M14 7v10" />
          <path d="M22 12h-2" />
          <path d="M4 12H2" />
          <path d="M12 2v2" />
          <path d="M12 22v-2" />
        </svg>
      ),
      title: "DevOps & Cloud",
      description: "Learn to build, deploy, and maintain scalable applications using modern cloud platforms.",
      features: [
        "CI/CD pipelines",
        "AWS or Azure cloud services",
        "Docker and Kubernetes",
        "Infrastructure as code",
        "Monitoring and logging"
      ]
    },
    {
      icon: (
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
          className="text-primary"
        >
          <path d="M3 11h18" />
          <path d="M5 7h14" />
          <path d="M7 15h10" />
          <path d="M7 19h10" />
          <path d="M11 3h2" />
          <path d="M12 3v4" />
        </svg>
      ),
      title: "UI/UX Design",
      description: "Create intuitive and engaging user experiences with modern design principles.",
      features: [
        "User research and testing",
        "Wireframing and prototyping",
        "Visual design principles",
        "Design systems",
        "Figma and Adobe Creative Suite"
      ]
    },
    {
      icon: (
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
          className="text-primary"
        >
          <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z" />
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
          <path d="M12 18V6" />
        </svg>
      ),
      title: "Blockchain Development",
      description: "Build decentralized applications and smart contracts on blockchain platforms.",
      features: [
        "Ethereum and Solidity",
        "Smart contract development",
        "Web3 integration",
        "Decentralized app architecture",
        "Cryptocurrency fundamentals"
      ]
    }
  ];
  
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Internship Programs"
          subtitle="Choose from our diverse range of technology-focused internship programs designed to kickstart your career."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <InternshipCard
              key={index}
              icon={program.icon}
              title={program.title}
              description={program.description}
              features={program.features}
              featured={program.featured}
              delay={index}
              onClick={handleApply}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipPrograms;
