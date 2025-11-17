import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store the contact message
      const contact = await storage.createContact(validatedData);
      
      // In a real application, you might send an email here
      console.log("Contact form submission:", contact);
      
      res.json({ success: true, id: contact.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit contact form" 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
