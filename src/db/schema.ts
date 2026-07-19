import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';

// 1. Gallery Asset Records Schema
export const gallery = sqliteTable('gallery', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  url: text('url').notNull(),
  tags: text('tags').notNull(), 
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

// 2. Structured FAQ System Schema
export const faqs = sqliteTable('faqs', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  question: text('question').notNull(),
  answer: text('answer').notNull(),
  category: text('category').notNull(), 
});

// 3. Performance Services Portfolio Schema (Core Marketing Display)
export const services = sqliteTable('services', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),              // E.g., "Business Strategic Alignment"
  coverImage: text('cover_image').notNull(),   // Cloudinary primary display background banner URL
  shortDetail: text('short_detail').notNull(), // High-converting description paragraph for frontend grids
  longDetail: text('long_detail').notNull(),   // In-depth description framework outlining core methodologies
  
  // JSON array string tracking multiple showcase assets for galleries/sliders
  // E.g., '["https://res.cloudinary.com/...", "https://res.cloudinary.com/..."]'
  galleryImages: text('gallery_images').notNull(), 
});

// 4. Relational Pricing & Operational Tier Structure (Linked directly to Excel layout)
export const pricingPlans = sqliteTable('pricing_plans', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  serviceId: integer('service_id')
    .notNull()
    .references(() => services.id, { onDelete: 'cascade' }),
  clientSegment: text('client_segment').notNull(), // E.g., "SME / Start-Up" or "Corporate"
  priceDisplay: text('price_display').notNull(),   // E.g., "Rp 2.500.000 – Rp 5.000.000" or "0.5x – 1x Gaji Pokok"
  
  // Stringified JSON list arrays storing dynamic rows straight from the sheet cells:
  scopeOfWork: text('scope_of_work').notNull(), // Detail list rows from "Ruang Lingkup Detail (SOW)"
  outOfScope: text('out_of_scope').notNull(),   // Exclusions list rows from "Batasan & Pengecualian"
  
  notes: text('notes'), // Flexible fallback container for extra transactional metadata rules
});

// 5. Secure Lead Generation Form Submissions Schema
export const submissions = sqliteTable('submissions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  company: text('company').notNull(),
  message: text('message').notNull(),
  status: text('status').notNull().$default(() => 'unread'), 
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

// =========================================================================
// DRIZZLE RELATIONAL METADATA DEFINITIONS
// =========================================================================
export const servicesRelations = relations(services, ({ many }) => ({
  pricingPlans: many(pricingPlans),
}));

export const pricingPlansRelations = relations(pricingPlans, ({ one }) => ({
  service: one(services, {
    fields: [pricingPlans.serviceId],
    references: [services.id],
  }),
}));