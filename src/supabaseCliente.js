import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://gcvhefpufwbbisbxhiic.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjdmhlZnB1ZndiYmlzYnhoaWljIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwODM3NTUxOCwiZXhwIjoyMDIzOTUxNTE4fQ.pgXDq2BvMhDA_UFjUyzo02ptarhAHax3wYtYpSNgdr4'
export const supabase = createClient(supabaseUrl, supabaseKey); 