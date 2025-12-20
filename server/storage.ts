import { db } from "./db";
import { videos, type Video, type InsertVideo } from "@shared/schema";

export interface IStorage {
  getVideos(): Promise<Video[]>;
  createVideo(video: InsertVideo): Promise<Video>;
}

export class DatabaseStorage implements IStorage {
  async getVideos(): Promise<Video[]> {
    return await db.select().from(videos);
  }

  async createVideo(insertVideo: InsertVideo): Promise<Video> {
    const [video] = await db.insert(videos).values(insertVideo).returning();
    return video;
  }
}

export const storage = new DatabaseStorage();
