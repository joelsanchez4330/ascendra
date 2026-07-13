import { db } from "./index";
import { gallery, faqs, services } from "./schema";

async function main() {
  console.log("🌱 Starting database seed with Unsplash samples...");

  try {
    // 1. Seed Gallery (Unsplash links with relevant workplace/wellbeing themes)
    console.log("Inserting gallery items...");
    await db.insert(gallery).values([
      {
        url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
        tags: "bootcamp,leadership,workshop"
      },
      {
        url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
        tags: "coaching,1on1,therapy"
      },
      {
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
        tags: "culture,teamwork,wellbeing"
      }
    ]);

    // 2. Seed FAQs
    console.log("Inserting FAQs...");
    await db.insert(faqs).values([
      {
        question: "How does prioritizing mental health impact employee performance?",
        answer: "When an organization prioritizes mental well-being, it unlocks intrinsic motivation. Understanding what truly drives an employee—whether it is psychological safety, recognition, or purpose—directly reduces burnout and makes them work with greater focus and autonomy.",
        category: "Philosophy"
      },
      {
        question: "Are the 1on1 coaching sessions confidential from HR?",
        answer: "Absolutely. To ensure true psychological safety, all employee 1on1 coaching sessions are completely confidential. We provide high-level, anonymized cultural data to the organization, but individual vulnerabilities are never exposed.",
        category: "Coaching"
      },
      {
        question: "What makes your Head Hunter service different from standard agencies?",
        answer: "We don't just match keywords on a resume. We screen candidates for emotional resilience, cultural alignment, and baseline intrinsic drivers to ensure they thrive long-term in your specific workplace environment.",
        category: "Head Hunting"
      }
    ]);

    // 3. Seed Services (Bootcamps, Head Hunter, 1on1 Coaching)
    console.log("Inserting services...");
    await db.insert(services).values([
      {
        title: "Workplace Wellness Bootcamps",
        detail: "Transformative training intensives focused on shifting organizational energy. Built across three pillars: Leadership (equipping managers to recognize burnout indicators), Transformation (rewiring personal resilience frameworks), and Culture (aligning corporate habits with human empathy). The ultimate focus is breaking down what drives your workforce—because when leaders understand what makes an employee tick, engagement skyrockets.",
        images: JSON.stringify([
          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop"
        ])
      },
      {
        title: "Resilient Talent Head Hunting",
        detail: "Finding leaders and specialists who aren't just technically capable, but mentally equipped to thrive. We place high-performing talent into organizations by matching their deep psychological drivers with your operational environment, reducing structural friction and employee turnover from day one.",
        images: JSON.stringify([
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
        ])
      },
      {
        title: "Confidential 1on1 Employee Coaching",
        detail: "Dedicated, clinical-grade professional coaching designed exclusively for employees. These personalized sessions give your team a safe, confidential sandbox to process workplace stressors, discover personal career drivers, and unpack anxiety, leading to sustained clarity and output on the job.",
        images: JSON.stringify([
          "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop"
        ])
      }
    ]);

    console.log("🚀 Database seeded with working layout images successfully!");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  }
}

main();