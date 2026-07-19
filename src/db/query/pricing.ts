"use server";

import { db } from "@/db";
import { pricingPlans } from "@/db/schema";
import { eq } from "drizzle-orm";

export interface FrontendPricingPlan {
  id: number;
  serviceId: number;
  clientSegment: 'SME / Start-Up' | 'Corporate' | string;
  priceDisplay: string;
  scopeOfWork: string[]; // Split dynamically by linebreaks for bullet items
  outOfScope: string[];   // Split dynamically by linebreaks for bullet items
  notes: string | null;
}

/**
 * Fetches the specific pricing variations (SME vs Corporate tracks) mapped to a core service
 */
export async function fetchPricingPlansByService(serviceId: number): Promise<FrontendPricingPlan[]> {
  try {
    const results = await db
      .select({
        id: pricingPlans.id,
        serviceId: pricingPlans.serviceId,
        clientSegment: pricingPlans.clientSegment,
        priceDisplay: pricingPlans.priceDisplay,
        scopeOfWork: pricingPlans.scopeOfWork,
        outOfScope: pricingPlans.outOfScope,
        notes: pricingPlans.notes,
      })
      .from(pricingPlans)
      .where(eq(pricingPlans.serviceId, serviceId));

    return results.map(plan => ({
      id: plan.id,
      serviceId: plan.serviceId,
      clientSegment: plan.clientSegment,
      priceDisplay: plan.priceDisplay,
      // Cleans data strings and breaks lines cleanly down into rendering arrays for layout templates
      scopeOfWork: plan.scopeOfWork ? plan.scopeOfWork.split('\n').map(s => s.replace(/^•\s*/, '').trim()).filter(Boolean) : [],
      outOfScope: plan.outOfScope ? plan.outOfScope.split('\n').map(s => s.replace(/^•\s*/, '').trim()).filter(Boolean) : [],
      notes: plan.notes,
    }));
  } catch (error) {
    console.error(`Failed to pull relational matrix plans for service ID ${serviceId}:`, error);
    return [];
  }
}