import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

// Manually load the env file
dotenv.config({ path: ".env.local" });

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "turso",
  dbCredentials: {
    url: process.env.TURSO_CONNECTION_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
});
