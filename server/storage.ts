import { type User, type InsertUser, type ContactRequest, type InsertContact, users, contactRequests } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactRequest(contact: InsertContact): Promise<ContactRequest>;
  getContactRequests(): Promise<ContactRequest[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactRequests: Map<string, ContactRequest>;

  constructor() {
    this.users = new Map();
    this.contactRequests = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactRequest(insertContact: InsertContact): Promise<ContactRequest> {
    const id = randomUUID();
    const contactRequest: ContactRequest = {
      ...insertContact,
      id,
      createdAt: new Date(),
    };
    this.contactRequests.set(id, contactRequest);
    return contactRequest;
  }

  async getContactRequests(): Promise<ContactRequest[]> {
    return Array.from(this.contactRequests.values());
  }
}

async function createStorage(): Promise<IStorage> {
  if (process.env.DATABASE_URL) {
    try {
      const { db } = await import("./db");
      const { eq } = await import("drizzle-orm");

      class DatabaseStorage implements IStorage {
        async getUser(id: string): Promise<User | undefined> {
          const [user] = await db.select().from(users).where(eq(users.id, id));
          return user;
        }

        async getUserByUsername(username: string): Promise<User | undefined> {
          const [user] = await db.select().from(users).where(eq(users.username, username));
          return user;
        }

        async createUser(insertUser: InsertUser): Promise<User> {
          const [user] = await db.insert(users).values(insertUser).returning();
          return user;
        }

        async createContactRequest(insertContact: InsertContact): Promise<ContactRequest> {
          const [contactRequest] = await db.insert(contactRequests).values(insertContact).returning();
          return contactRequest;
        }

        async getContactRequests(): Promise<ContactRequest[]> {
          return db.select().from(contactRequests);
        }
      }

      console.log("[storage] Using PostgreSQL database storage");
      return new DatabaseStorage();
    } catch (error) {
      console.warn("[storage] Failed to connect to database, falling back to in-memory storage:", error);
      return new MemStorage();
    }
  }
  
  console.log("[storage] Using in-memory storage");
  return new MemStorage();
}

export const storage = await createStorage();
