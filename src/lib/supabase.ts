import { createClient } from '@supabase/supabase-js';

// Configuração do cliente Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Debug detalhado das variáveis
console.log('=== SUPABASE CONFIGURATION DEBUG ===');
console.log('Environment:', import.meta.env.MODE);
console.log('Is Production:', import.meta.env.PROD);
console.log('Raw VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('URL type:', typeof import.meta.env.VITE_SUPABASE_URL);
console.log('URL length:', (import.meta.env.VITE_SUPABASE_URL || '').length);
console.log('URL contains kaegprhq:', (import.meta.env.VITE_SUPABASE_URL || '').includes('kaegprhq'));
console.log('URL substring test:', (import.meta.env.VITE_SUPABASE_URL || '').substring(0, 50));
console.log('VITE_SUPABASE_ANON_KEY:', import.meta.env.VITE_SUPABASE_ANON_KEY ? 'SET' : 'NOT SET');
console.log('All VITE vars:', Object.keys(import.meta.env).filter(k => k.startsWith('VITE_')));

// Verificar especificamente por corrupção na URL
const envUrl = import.meta.env.VITE_SUPABASE_URL;
if (envUrl) {
  console.log('=== URL CORRUPTION CHECK ===');
  console.log('Expected: kaegprhqiipriovwgnecn');
  console.log('Got in URL:', envUrl.match(/kaegprhq[a-z]*/)?.[0] || 'NOT FOUND');
  console.log('URL corruption detected:', !envUrl.includes('kaegprhqiipriovwgnecn'));
}

// Determinar configuração a usar
let finalUrl: string;
let finalKey: string;
let isConfigured = true;

if (!supabaseUrl || !supabaseAnonKey) {
  // Variáveis não configuradas - usar placeholders seguros
  console.error('⚠️ CRITICAL: Supabase environment variables not configured!');
  console.error('Please configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY');
  
  finalUrl = 'https://placeholder.supabase.co';
  finalKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder';
  isConfigured = false;
} else {
  // Variáveis configuradas corretamente
  console.log('✅ Supabase configured with environment variables');
  finalUrl = supabaseUrl;
  finalKey = supabaseAnonKey;
  isConfigured = true;
}

// Criar cliente Supabase
export const supabase = createClient(finalUrl, finalKey);

// Marcar se cliente está configurado
(supabase as any).__notConfigured = !isConfigured;