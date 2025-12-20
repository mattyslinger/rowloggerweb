import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get(api.videos.list.path, async (req, res) => {
    const videos = await storage.getVideos();
    res.json(videos);
  });

  app.post(api.videos.create.path, async (req, res) => {
    try {
      const input = api.videos.create.input.parse(req.body);
      const video = await storage.createVideo(input);
      res.status(201).json(video);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed data if empty
  const existingVideos = await storage.getVideos();
  if (existingVideos.length === 0) {
    await storage.createVideo({
      title: "Getting Started with RowLogger",
      description: "Learn the basics of tracking your rowing sessions.",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      thumbnailUrl: "https://images.unsplash.com/photo-1547483954-3fb180c96bfa",
      category: "training"
    });
    await storage.createVideo({
      title: "Advanced Features",
      description: "Deep dive into data analysis and export tools.",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      thumbnailUrl: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff",
      category: "training"
    });
  }

  return httpServer;
}
