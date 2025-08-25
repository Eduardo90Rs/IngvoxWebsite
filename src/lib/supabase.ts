import { createClient } from '@supabase/supabase-js';

// Configuração do cliente Supabase - usando placeholders válidos para evitar crashes
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder';

// Debug: Log detalhado das variáveis de ambiente
console.log('=== SUPABASE CONFIGURATION DEBUG ===');
console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key exists:', !!supabaseAnonKey && supabaseAnonKey !== 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder');
console.log('Environment:', import.meta.env.MODE);
console.log('All env vars:', Object.keys(import.meta.env).filter(key => key.startsWith('VITE_')));

// Verifica se as variáveis estão configuradas
const isPlaceholder = supabaseUrl === 'https://placeholder.supabase.co' || 
                     supabaseAnonKey === 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder';

if (isPlaceholder) {
  console.error('⚠️ SUPABASE ENV VARS NOT CONFIGURED!');
  console.error('Expected variables:');
  console.error('- VITE_SUPABASE_URL (current: ' + (import.meta.env.VITE_SUPABASE_URL || 'undefined') + ')');
  console.error('- VITE_SUPABASE_ANON_KEY (current: ' + (import.meta.env.VITE_SUPABASE_ANON_KEY ? 'set' : 'undefined') + ')');
  console.error('Make sure these are configured in Vercel Dashboard');
}

// Validação adicional de formato
if (!isPlaceholder && supabaseUrl && !supabaseUrl.includes('supabase.co')) {
  console.warn('Warning: Supabase URL may be invalid - should contain "supabase.co"');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);