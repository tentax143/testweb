import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  program: z.string().min(1, "Please select a program"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Register API routes

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const formData = contactSchema.parse(req.body);
      
      // Here you would typically save to a database
      // For now we'll just log the submission
      console.log("Received contact form submission:", formData);
      
      // Return success response
      return res.status(200).json({
        success: true,
        message: "Form submitted successfully"
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        return res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors
        });
      }
      
      // Handle other errors
      console.error("Contact form error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to process your request. Please try again later."
      });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
