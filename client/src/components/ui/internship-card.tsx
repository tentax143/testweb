import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { Button } from "./button";
import { cn } from "../../lib/utils";

interface InternshipCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  cta?: string;
  onClick?: () => void;
  className?: string;
  featured?: boolean;
  delay?: number;
}

const InternshipCard: React.FC<InternshipCardProps> = ({
  icon,
  title,
  description,
  features,
  cta = "Apply Now",
  onClick,
  className,
  featured = false,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      className={cn("h-full", className)}
    >
      <Card 
        className={cn(
          "h-full border transition-all hover:shadow-md overflow-hidden relative",
          featured && "border-primary bg-primary/5 shadow-md"
        )}
      >
        {featured && (
          <div className="absolute top-5 right-5">
            <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
        
        <CardHeader className="space-y-1 pb-2">
          <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg mb-4">
            {icon}
          </div>
          <h3 className={cn(
            "text-xl font-semibold",
            featured && "text-primary"
          )}>
            {title}
          </h3>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{description}</p>
          
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 mt-0.5 text-primary"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        
        <CardFooter className="pt-4">
          <Button
            onClick={onClick}
            className={cn(
              "w-full",
              featured ? "bg-primary hover:bg-primary/90" : ""
            )}
          >
            {cta}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default InternshipCard;
