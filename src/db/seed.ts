import { db } from "./index";
import { gallery, faqs, services, submissions } from "./schema";

async function main() {
  console.log("🧹 Wiping old database records first...");

  try {
    // Delete existing records to clear constraints and duplicates
    await db.delete(gallery);
    await db.delete(faqs);
    await db.delete(services);
    await db.delete(submissions);
    console.log("✅ Database cleared cleanly.");

    console.log("🌱 Starting database seed with enhanced schema details...");

    // 1. Seed Gallery
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

    // 3. Seed Services matched perfectly with Drizzle schema core column parameters
    console.log("Inserting services mapped to coverImage, shortDetail, longDetail, and galleryImages keys...");
    await db.insert(services).values([
      {
        title: "Workplace Wellness Bootcamps",
        shortDetail: "Corporate Training Intensives",
        longDetail: "Transformative training intensives focused on shifting organizational energy. Built across three pillars: Leadership (equipping managers to recognize burnout indicators), Transformation (rewiring personal resilience frameworks), and Culture (aligning corporate habits with human empathy). The ultimate focus is breaking down what drives your workforce—because when leaders understand what makes an employee tick, engagement skyrockets.",
        coverImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
        galleryImages: JSON.stringify({
          showcase: [
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop"
          ],
          pricingTiers: [
            {
              name: "Startup Tier",
              price: "IDR 15M",
              period: "per single session",
              description: "Ideal for growing teams seeking an immediate cultural foundation.",
              features: ["Up to 15 team participants", "1 full-day immersive workshop session", "Essential framework workbook PDF access", "1-week post-training follow-up support"]
            },
            {
              name: "Business Tier",
              price: "IDR 35M",
              period: "per 3-month cycle",
              description: "Perfect for established mid-sized organizations wanting deeper tools.",
              features: ["Up to 45 total team participants", "3 monthly comprehensive training modules", "Printed guidebooks and full manager toolkits", "Bi-weekly pulse surveys and implementation data"]
            },
            {
              name: "Corporate Tier",
              price: "Custom",
              period: "annual commitment",
              description: "Built for enterprises requiring fully tailored structural strategies.",
              features: ["Unlimited participant scaling", "Year-round custom training schedule architecture", "Quarterly diagnostic executive impact reviews", "Integrated access to direct employee coaching pools"]
            }
          ]
        })
      },
      {
        title: "Resilient Talent Head Hunting",
        shortDetail: "Executive Search & Alignment",
        longDetail: "Finding leaders and specialists who aren't just technically capable, but mentally equipped to thrive. We place high-performing talent into organizations by matching their deep psychological drivers with your operational environment, reducing structural friction and employee turnover from day one.",
        coverImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
        galleryImages: JSON.stringify({
          showcase: [
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
          ],
          pricingTiers: [
            {
              name: "Startup Tier",
              price: "15% Fee",
              period: "of first year base salary",
              description: "Basic contingent placement for early-stage operational scaling.",
              features: ["Standard psychological screening", "30-day candidate guarantee", "Access to active non-executive candidate pool"]
            },
            {
              name: "Business Tier",
              price: "20% Fee",
              period: "of first year base salary",
              description: "Full search pipeline with structural culture matching framework.",
              features: ["Deep intrinsic motivation assessment", "90-day candidate guarantee", "Dedicated recruitment engineer assigned to project", "Full background verification dashboard tracking"]
            },
            {
              name: "Corporate Tier",
              price: "Custom Retainer",
              period: "tailored enterprise terms",
              description: "Strategic partnerships for continuous executive leadership architecture mapping.",
              features: ["Unlimited placements within retainer limits", "180-day executive structural placement guarantee", "Dedicated account managers inside internal HR systems"]
            }
          ]
        })
      },
      {
        title: "Confidential 1on1 Employee Coaching",
        shortDetail: "Direct Support & Counseling",
        longDetail: "Dedicated, clinical-grade professional coaching designed exclusively for employees. These personalized sessions give your team a safe, confidential sandbox to process workplace stressors, discover personal career drivers, and unpack anxiety, leading to sustained clarity and output on the job.",
        coverImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop",
        galleryImages: JSON.stringify({
          showcase: [
            "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop"
          ],
          pricingTiers: [
            {
              name: "Startup Tier",
              price: "IDR 8M",
              period: "per month flat rate",
              description: "Basic support allocation for small core operations packages.",
              features: ["Up to 10 allocation hours per month", "Secure private calendar scheduling interface", "Anonymized monthly thematic utilization metrics data"]
            },
            {
              name: "Business Tier",
              price: "IDR 18M",
              period: "per month flat rate",
              description: "Scalable access pools covering broad department structures.",
              features: ["Up to 30 allocation hours per month", "Priority clinical facilitator request response window", "Comprehensive monthly quarterly stress metric diagnosis reporting"]
            },
            {
              name: "Corporate Tier",
              price: "Custom",
              period: "enterprise scale subscription",
              description: "Dedicated full availability support networks across global networks.",
              features: ["Unlimited direct chat line response interface pools", "Dedicated on-site organizational counseling hours", "Custom white-label dashboard integration access"]
            }
          ]
        })
      }
    ]);

    // 4. Seed Submissions
    console.log("Inserting customer contact form submissions...");
    await db.insert(submissions).values([
      {
        name: "Ahmad Hidayat",
        email: "ahmad.h@techcorp.co.id",
        company: "PT TechCorp Global Indonesia",
        message: "We are currently observing widespread burnout within our engineering teams following a heavy shipping sprint. I would like to get detailed operational frameworks and dates for your Workplace Wellness Bootcamps.",
        status: "unread"
      },
      {
        name: "Linda Wijaya",
        email: "linda@retailventures.com",
        company: "Retail Ventures Group",
        message: "Interested in the Business Tier setup for the 1on1 employee coaching system. We have roughly 40 staff members ready for baseline deployment profiles next month.",
        status: "read"
      }
    ]);

    console.log("🚀 Database successfully synchronized and fully seeded with fresh configuration architecture arrays!");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  }
}

main();