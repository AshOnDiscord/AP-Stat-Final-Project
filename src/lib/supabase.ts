// lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SUPABASE_ANON_KEY: string;
      SUPABASE_PUBLISHABLE_KEY: string;
      SUPABASE_URL: string;
      POSTGRES_DATABASE: string;
      POSTGRES_HOST: string;
      POSTGRES_PASSWORD: string;
      POSTGRES_PRISMA_URL: string;
      POSTGRES_URL: string;
      POSTGRES_URL_NON_POOLING: string;
      POSTGRES_USER: string;
      SUPABASE_JWT_SECRET: string;
      SUPABASE_SECRET_KEY: string;
      SUPABASE_SERVICE_ROLE_KEY: string;
    }
  }
}

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error(
    "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables",
  );
}

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);
