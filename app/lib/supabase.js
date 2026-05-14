import { createClient } from "@supabase/supabase-js";

const supabaseUrl = https://lmtuuifkaqeyxxjzaqmk.supabase.co
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtdHV1aWZrYXFleXh4anphcW1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxNTcyNjIsImV4cCI6MjA5MzczMzI2Mn0.jBy8NXuIwDbYwN63YJBao2IuBYrw-uO6iNDnTm51UPQ;

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
);