"use server";

import { db } from "../index";
import { submissions } from "../schema";

export interface SubmissionPayload {
  name: string;
  email: string;
  company: string;
  message: string;
}

export async function createFormSubmission(payload: SubmissionPayload) {
  try {
    if (!payload.name || !payload.email || !payload.company || !payload.message) {
      return { success: false, error: "Missing required fields." };
    }

    await db.insert(submissions).values({
      name: payload.name.trim(),
      email: payload.email.trim(),
      company: payload.company.trim(),
      message: payload.message.trim(),
      status: "unread",
    });

    return { success: true };
  } catch (error) {
    console.error("Database tracking write failure:", error);
    return { success: false, error: "System failed to register submission record." };
  }
}