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

// 3. Services Schema
export const services = sqliteTable('services', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  detail: text('detail').notNull(),
  images: text('images').notNull(),
});