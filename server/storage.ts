import { type Video, type InsertVideo } from "@shared/schema";

export interface IStorage {
  getVideos(): Promise<Video[]>;
  createVideo(video: InsertVideo): Promise<Video>;
}

export class MemStorage implements IStorage {
  private videos: Video[] = [];
  private currentId = 1;

  constructor() {
    // Pre-populate with seed data
    this.createVideo({
      title: "Getting Started with RowLogger",
      description: "Learn the basics of tracking your rowing sessions.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder
      thumbnailUrl: "https://images.unsplash.com/photo-1547483954-3fb180c96bfa",
      category: "training"
    });
    this.createVideo({
      title: "Advanced Features",
      description: "Deep dive into data analysis and export tools.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder
      thumbnailUrl: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff",
      category: "training"
    });
  }

  async getVideos(): Promise<Video[]> {
    return this.videos;
  }

  async createVideo(insertVideo: InsertVideo): Promise<Video> {
    const video: Video = { ...insertVideo, id: this.currentId++ };
    this.videos.push(video);
    return video;
  }
}

export const storage = new MemStorage();
