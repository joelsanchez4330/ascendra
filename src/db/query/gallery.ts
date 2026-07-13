"use server";

import { db } from "@/db";
import { gallery } from "@/db/schema";
import { and, like, desc } from "drizzle-orm";

export interface GalleryItem {
  id: number;
  url: string;
  tags: string;
  createdAt: Date | null;
}

export async function fetchGalleryItems(categoryFilter?: string): Promise<GalleryItem[]> {
  try {
    const conditions = [];

    // Filters directly against the targeted tag string within the database rows
    if (categoryFilter && categoryFilter !== "all") {
      conditions.push(like(gallery.tags, `%${categoryFilter.trim()}%`));
    }

    const results = await db
      .select({
        id: gallery.id,
        url: gallery.url,
        tags: gallery.tags,
        createdAt: gallery.createdAt,
      })
      .from(gallery)
      .where(conditions.length > 0 ? and(...conditions) : undefined)
      .orderBy(desc(gallery.createdAt));

    return results;
  } catch (error) {
    console.error("Failed to fetch gallery items from SQLite:", error);
    return [];
  }
}