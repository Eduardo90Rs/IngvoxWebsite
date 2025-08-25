import { createClient } from '@supabase/supabase-js';

// HARDCODE TEMPORÁRIO - Substitua com variáveis de ambiente quando funcionarem
const SUPABASE_URL = 'https://kaegprhqiipriovwghecn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2thZWdwcmhxaWlwcmlvd2duZWNuLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTczMTUxMDMxNCwiZXhwIjoyMDQ3MDg2MzE0fQ.sb_publishable_pnFS2dMvCxyYmVWTETwLOA_0nt-K38s';

// Tentar usar variáveis de ambiente primeiro, fallback para hardcode
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || SUPABASE_ANON_KEY;

// Debug: Log detalhado
console.log('=== SUPABASE CONFIGURATION DEBUG ===');
console.log('ENV URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('ENV KEY:', import.meta.env.VITE_SUPABASE_ANON_KEY ? 'EXISTS' : 'MISSING');
console.log('Using URL:', supabaseUrl);
console.log('Using KEY:', supabaseAnonKey ? 'EXISTS' : 'MISSING');
console.log('URL Length:', supabaseUrl.length);
console.log('URL includes supabase.co:', supabaseUrl.includes('supabase.co'));

// Verificar se a URL está completa
if (supabaseUrl && !supabaseUrl.includes('supabase.co')) {
  console.error('⚠️ CRITICAL: Supabase URL is malformed!');
  console.error('Expected: https://kaegprhqiipriovwghecn.supabase.co');
  console.error('Got:', supabaseUrl);
}

// Criar cliente com valores hardcoded temporariamente
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Log do cliente criado
console.log('Supabase client created');
console.log('Client auth URL:', supabase.auth);

// NOTA: Este é um hardcode temporário para resolver o problema de produção
// As credenciais devem vir de variáveis de ambiente em produção final