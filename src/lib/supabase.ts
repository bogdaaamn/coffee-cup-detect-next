import { createClient } from "@supabase/supabase-js";

import type { Database } from "~/types/supabase";

const { SUPABASE_URL = "", SUPABASE_ANON_KEY = "" } = process.env;

// Create a single supabase client for interacting with the database
export const supabaseClient = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
