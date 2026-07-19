"use server";

import { db } from "@/db";
import { services } from "@/db/schema";
import { and, like, or, eq } from "drizzle-orm";

// Interface mapping perfectly to the active production database columns
export interface FrontendServiceItem {
  id: number;
  title: string;
  coverImage: string;
  shortDetail: string;
  longDetail: string;
  galleryImages: string[]; // Cleanly parsed for UI component injection
  benefits: string[];      // Unified tracking for landing page features
}

export async function fetchServices(searchQuery?: string, categoryFilter?: string): Promise<FrontendServiceItem[]> {
  try {
    const conditions = [];

    // 1. Text Search Constraints Mapping
    if (searchQuery && searchQuery.trim() !== "") {
      const cleanQuery = `%${searchQuery.trim()}%`;
      conditions.push(
        or(
          like(services.title, cleanQuery),
          like(services.shortDetail, cleanQuery),
          like(services.longDetail, cleanQuery)
        )
      );
    }

    const results = await db
      .select({
        id: services.id,
        title: services.title,
        coverImage: services.coverImage,
        shortDetail: services.shortDetail,
        longDetail: services.longDetail,
        galleryImages: services.galleryImages,
      })
      .from(services)
      .where(conditions.length > 0 ? and(...conditions) : undefined);

    // 2. Data Hydration & Transformation Pipeline
    const mappedServices = results.map(item => {
      let parsedGallery: string[] = [];
      try {
        parsedGallery = JSON.parse(item.galleryImages || "[]");
      } catch (e) {
        parsedGallery = [];
      }

      // Generates fallback itemized checklist features if your details layout requires them
      const fallbackBenefits = [
        item.shortDetail || "Tailored Corporate Strategy Framework",
        "Includes Dedicated Operational Implementation",
        "Full Risk Mitigation & Performance Metrics Alignment"
      ];

      return {
        id: item.id,
        title: item.title || "",
        coverImage: item.coverImage || "",
        shortDetail: item.shortDetail || "",
        longDetail: item.longDetail || "",
        galleryImages: parsedGallery,
        benefits: fallbackBenefits
      };
    });

    // 3. Multi-Language Resilient Category Filtering Layer
    if (categoryFilter && categoryFilter !== "all") {
      return mappedServices.filter(item => {
        const titleLower = item.title.toLowerCase();
        const shortLower = item.shortDetail.toLowerCase();
        const longLower = item.longDetail.toLowerCase();

        // Helper check matching any target pattern across content strings
        const matchesKeywords = (keywords: string[]) => 
          keywords.some(kw => titleLower.includes(kw) || shortLower.includes(kw) || longLower.includes(kw));

        if (categoryFilter === "alignment") {
          return matchesKeywords(["alignment", "strategic", "strategy", "bisnis", "struktur", "selaras"]);
        }
        
        if (categoryFilter === "talent") {
          return matchesKeywords(["talent", "assessment", "acquisition", "recruiting", "bakat", "asesmen", "rekrut", "hunting"]);
        }
        
        if (categoryFilter === "training") {
          return matchesKeywords(["training", "development", "pelatihan", "pengembangan", "workshop", "bootcamp", "coaching"]);
        }
        
        return true;
      });
    }

    return mappedServices;
  } catch (error) {
    console.error("Failed to fetch data records from backend Turso context:", error);
    return [];
  }
}

export async function fetchServiceBySlug(slug: string): Promise<FrontendServiceItem | null> {
  try {
    const idMatch = slug.match(/-(\d+)$/);
    const id = idMatch ? parseInt(idMatch[1], 10) : null;

    if (!id || isNaN(id)) return null;

    const result = await db
      .select({
        id: services.id,
        title: services.title,
        coverImage: services.coverImage,
        shortDetail: services.shortDetail,
        longDetail: services.longDetail,
        galleryImages: services.galleryImages,
      })
      .from(services)
      .where(eq(services.id, id))
      .get(); 

    if (!result) return null;

    let parsedGallery: string[] = [];
    try {
      parsedGallery = JSON.parse(result.galleryImages || "[]");
    } catch (e) {
      parsedGallery = [];
    }

    return {
      id: result.id,
      title: result.title || "",
      coverImage: result.coverImage || "",
      shortDetail: result.shortDetail || "",
      longDetail: result.longDetail || "",
      galleryImages: parsedGallery,
      benefits: [
        result.shortDetail || "Tailored Corporate Performance Alignment Layers",
        "Includes Dedicated Operational Implementation"
      ]
    };
  } catch (error) {
    console.error(`Failed to pull dynamic payload parameters for slug parameter [${slug}]:`, error);
    return null;
  }
}