import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const contactRequests = pgTable("contact_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  company: text("company").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  service: text("service"),
  privacy: text("privacy").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactSchema = createInsertSchema(contactRequests).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  name: z.string().min(2, "Name muss mindestens 2 Zeichen haben"),
  company: z.string().min(2, "Firmenname muss mindestens 2 Zeichen haben"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen haben"),
  privacy: z.string().min(1, "Bitte akzeptieren Sie die Datenschutzerklärung"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactRequest = typeof contactRequests.$inferSelect;
