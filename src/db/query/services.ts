"use server";

import { db } from "@/db";
import { services } from "@/db/schema";
import { eq, and, like, or } from "drizzle-orm";

// 1. Updated Interface layout tracking all required columns
export interface ServiceItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  benefits: string[];
  pricingTiers: string; // Ensure the frontend can access this raw text block
}

export async function fetchServices(searchQuery?: string, categoryFilter?: string): Promise<ServiceItem[]> {
  try {
    const conditions = [];

    if (searchQuery && searchQuery.trim() !== "") {
      const cleanQuery = `%${searchQuery.trim()}%`;
      conditions.push(
        or(
          like(services.title, cleanQuery),
          like(services.description, cleanQuery)
        )
      );
    }

    const results = await db
      .select({
        id: services.id,
        title: services.title,
        subtitle: services.subtitle,
        description: services.description,
        image: services.image,
        benefits: services.benefits,
        pricingTiers: services.pricingTiers, // Select column
      })
      .from(services)
      .where(conditions.length > 0 ? and(...conditions) : undefined);

    const mappedServices = results.map(item => {
      let parsedBenefits: string[] = [];
      try {
        parsedBenefits = JSON.parse(item.benefits);
      } catch (e) {
        parsedBenefits = ["Professional team execution", "Flexible scheduling options", "Proven workplace outcomes"];
      }

      return {
        id: item.id,
        title: item.title,
        subtitle: item.subtitle, 
        description: item.description,
        image: item.image,
        benefits: parsedBenefits,
        pricingTiers: item.pricingTiers // Return property
      };
    });

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
    const idMatch = slug.match(/-(\d+)$/);
    const id = idMatch ? parseInt(idMatch[1], 10) : null;

    if (!id || isNaN(id)) return null;

    const result = await db
      .select({
        id: services.id,
        title: services.title,
        subtitle: services.subtitle,
        description: services.description,
        image: services.image,
        benefits: services.benefits,
        pricingTiers: services.pricingTiers, // FIXED: Added to database row select parameters
      })
      .from(services)
      .where(eq(services.id, id))
      .get(); 

    if (!result) return null;

    let parsedBenefits: string[] = [];
    try {
      parsedBenefits = JSON.parse(result.benefits);
    } catch (e) {
      parsedBenefits = [];
    }

    return {
      id: result.id,
      title: result.title,
      subtitle: result.subtitle,
      description: result.description,
      image: result.image,
      benefits: parsedBenefits,
      pricingTiers: result.pricingTiers // FIXED: Passed directly through to frontend props pipeline mapping
    };
  } catch (error) {
    console.error("Failed to query service details:", error);
    return null;
  }
}