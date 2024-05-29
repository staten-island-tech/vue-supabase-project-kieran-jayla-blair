import { createClient } from '@supabase/supabase-js'
const supabaseURL = 'https://appibxbabgskurddmnjz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwcGlieGJhYmdza3VyZGRtbmp6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMjE1MDEzNSwiZXhwIjoyMDI3NzI2MTM1fQ.TqhAoqZQE1rzU6O_UtXg6F8qAX9tP1QX3wnO_iYXF68'
export const supabase = createClient(supabaseURL, supabaseKey)