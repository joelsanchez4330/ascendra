"use server";

import { db } from "@/db";
import { services } from "@/db/schema";
import { eq, and, like, or } from "drizzle-orm";

export interface ServiceItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  benefits: string[];
}

export async function fetchServices(searchQuery?: string, categoryFilter?: string): Promise<ServiceItem[]> {
  try {
    const conditions = [];

    // Apply search query text matching title or detail columns
    if (searchQuery && searchQuery.trim() !== "") {
      const cleanQuery = `%${searchQuery.trim()}%`;
      conditions.push(
        or(
          like(services.title, cleanQuery),
          like(services.detail, cleanQuery)
        )
      );
    }

    // Execute SQLite select statement
    const results = await db
      .select({
        id: services.id,
        title: services.title,
        detail: services.detail,
        images: services.images,
      })
      .from(services)
      .where(conditions.length > 0 ? and(...conditions) : undefined);

    // Map rows to standard frontend card data
    const mappedServices = results.map(item => ({
      id: item.id,
      title: item.title,
      subtitle: "Ascendra Workplace Solutions", 
      description: item.detail,
      image: item.images,
      benefits: ["Professional team execution", "Flexible scheduling options", "Proven workplace outcomes"] 
    }));

    // Filter results locally based on title contents to match the category filter selection
    if (categoryFilter && categoryFilter !== "all") {
      return mappedServices.filter(item => {
        const titleLower = item.title.toLowerCase();
        if (categoryFilter === "bootcamp") return titleLower.includes("bootcamp") || titleLower.includes("wellness");
        if (categoryFilter === "recruiting") return titleLower.includes("recruiting") || titleLower.includes("hunting") || titleLower.includes("talent");
        if (categoryFilter === "coaching") return titleLower.includes("coaching") || titleLower.includes("1-on-1");
        return true;
      });
    }

    return mappedServices;

  } catch (error) {
    console.error("Failed to query SQLite database:", error);
    return [];
  }
}

export async function fetchServiceBySlug(slug: string): Promise<ServiceItem | null> {
  try {
    // Convert url slug back to id number (e.g., "workplace-wellness-bootcamps-1" -> 1)
    const idMatch = slug.match(/-(\d+)$/);
    const id = idMatch ? parseInt(idMatch[1], 10) : null;

    if (!id || isNaN(id)) return null;

    const result = await db
      .select({
        id: services.id,
        title: services.title,
        detail: services.detail,
        images: services.images,
      })
      .from(services)
      .where(eq(services.id, id))
      .get(); // Using .get() for singular row retrieval in SQLite

    if (!result) return null;

    // Split image string by commas if you store multiple images as text, or use fallback list
    const imageList = result.images.includes(',') 
      ? result.images.split(',').map(img => img.trim())
      : [result.images];

    return {
      id: result.id,
      title: result.title,
      subtitle: "Ascendra Workplace Solutions",
      description: result.detail,
      image: imageList[0],
      // Expose the raw array for the image gallery section
      benefits: imageList 
    };
  } catch (error) {
    console.error("Failed to query service details:", error);
    return null;
  }
}