import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// 1. Gallery Schema
export const gallery = sqliteTable('gallery', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  url: text('url').notNull(),
  tags: text('tags').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

// 2. FAQ Schema
export const faqs = sqliteTable('faqs', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  question: text('question').notNull(),
  answer: text('answer').notNull(),
  category: text('category').notNull(),
});

// 3. Services Schema (Enhanced with Pricing and Benefits)
export const services = sqliteTable('services', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  subtitle: text('subtitle').notNull(),
  description: text('description').notNull(),
  image: text('image').notNull(),
  benefits: text('benefits').notNull(), 
  pricingTiers: text('pricing_tiers').notNull(), 
});

// 4. Contact Form Submissions Schema (New)
export const submissions = sqliteTable('submissions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  company: text('company').notNull(),
  message: text('message').notNull(),
  status: text('status').notNull().$default(() => 'unread'), // For dashboard management state tracking
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});