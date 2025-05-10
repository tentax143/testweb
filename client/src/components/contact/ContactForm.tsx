import { useState } from "react";
import { motion } from "framer-motion";
import { useAudio } from "../../lib/stores/useAudio";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../../lib/queryClient";
import { toast } from "sonner";
import { z } from "zod";

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  program: z.string().min(1, "Please select a program"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const { playSuccess } = useAudio();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  
  // Form errors
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };
  
  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate form data
      contactSchema.parse(formData);
      
      // Clear errors on valid submission
      setErrors({});
      setIsSubmitting(true);
      
      // Submit to API
      await apiRequest("POST", "/api/contact", formData);
      
      // Success notification and sound
      playSuccess();
      toast.success("Application submitted successfully! We'll be in touch soon.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        program: "",
        message: "",
      });
      
      // Redirect to home after a delay
      setTimeout(() => {
        navigate("/");
      }, 3000);
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        // Handle API errors
        toast.error("Failed to submit form. Please try again later.");
        console.error("Form submission error:", error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-card p-6 md:p-8 rounded-lg border shadow-sm"
    >
      <h3 className="text-2xl font-semibold mb-6">Apply for an Internship</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Full Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${
              errors.name ? "border-destructive" : "border-input"
            }`}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-destructive">{errors.name}</p>
          )}
        </div>
        
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address <span className="text-destructive">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${
              errors.email ? "border-destructive" : "border-input"
            }`}
            placeholder="mk4997320@gmail.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-destructive">{errors.email}</p>
          )}
        </div>
        
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="7418642403"
          />
        </div>
        
        {/* Program Selection */}
        <div>
          <label htmlFor="program" className="block text-sm font-medium mb-2">
            Internship Program <span className="text-destructive">*</span>
          </label>
          <select
            id="program"
            name="program"
            value={formData.program}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${
              errors.program ? "border-destructive" : "border-input"
            }`}
          >
            <option value="">Select a program</option>
            <option value="web-development">Web Development</option>
            <option value="mobile-development">Mobile App Development</option>
            <option value="data-science">Data Science</option>
            <option value="devops">DevOps & Cloud</option>
            <option value="ui-ux">UI/UX Design</option>
            <option value="blockchain">Blockchain Development</option>
          </select>
          {errors.program && (
            <p className="mt-1 text-sm text-destructive">{errors.program}</p>
          )}
        </div>
        
        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Cover Letter / Message <span className="text-destructive">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none ${
              errors.message ? "border-destructive" : "border-input"
            }`}
            placeholder="Tell us about yourself, your experience, and why you're interested in this program..."
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-destructive">{errors.message}</p>
          )}
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-md font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </span>
          ) : (
            "Submit Application"
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
