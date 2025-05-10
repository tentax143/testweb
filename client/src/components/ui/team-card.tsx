import { motion } from "framer-motion";
import { Card, CardContent } from "./card";
import { cn } from "../../lib/utils";

interface TeamCardProps {
  name: string;
  role: string;
  imageSrc: string;
  socialLinks?: {
    icon: React.ReactNode;
    href: string;
    label: string;
  }[];
  delay?: number;
  className?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  imageSrc,
  socialLinks = [],
  delay = 0,
  className
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      className={className}
    >
      <Card className="overflow-hidden border hover:shadow-md transition-all">
        <div className="aspect-square relative overflow-hidden bg-muted">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${imageSrc})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
            <div className="flex space-x-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <CardContent className="p-4 text-center">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TeamCard;
