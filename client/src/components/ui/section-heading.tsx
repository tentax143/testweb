import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  subtitleClassName?: string;
  animated?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = "center",
  className = "",
  subtitleClassName = "",
  animated = true
}) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto"
  };
  
  const titleElement = animated ? (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "text-3xl md:text-4xl font-bold text-foreground mb-4",
        className
      )}
    >
      {title}
    </motion.h2>
  ) : (
    <h2 className={cn(
      "text-3xl md:text-4xl font-bold text-foreground mb-4",
      className
    )}>
      {title}
    </h2>
  );
  
  const subtitleElement = subtitle && (
    animated ? (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
        className={cn(
          "text-lg text-muted-foreground max-w-2xl",
          subtitleClassName
        )}
      >
        {subtitle}
      </motion.p>
    ) : (
      <p className={cn(
        "text-lg text-muted-foreground max-w-2xl",
        subtitleClassName
      )}>
        {subtitle}
      </p>
    )
  );
  
  return (
    <div className={cn("mb-10", alignmentClasses[align])}>
      {titleElement}
      {subtitleElement}
    </div>
  );
};

export default SectionHeading;
