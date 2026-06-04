import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL;

const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

// Debug: expose resolved env values in console (client only)
try {
    // eslint-disable-next-line no-console
    console.log('supabaseUrl (resolved):', supabaseUrl);
    // eslint-disable-next-line no-console
    console.log('supabaseKey (present):', !!supabaseKey);
} catch (e) {}

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
);
