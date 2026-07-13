"use server";

import { db } from "@/db";
import { faqs } from "@/db/schema";
import { and, eq } from "drizzle-orm";

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export async function fetchFAQs(categoryFilter?: string): Promise<FAQItem[]> {
  try {
    const conditions = [];

    // Filters against the text values ("Philosophy", "Coaching", "Head Hunting")
    if (categoryFilter && categoryFilter !== "all") {
      conditions.push(eq(faqs.category, categoryFilter.trim()));
    }

    const results = await db
      .select({
        id: faqs.id,
        question: faqs.question,
        answer: faqs.answer,
        category: faqs.category,
      })
      .from(faqs)
      .where(conditions.length > 0 ? and(...conditions) : undefined);

    return results;
  } catch (error) {
    console.error("Failed to fetch FAQs from SQLite:", error);
    return [];
  }
}