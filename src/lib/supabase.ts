import { createClient } from '@supabase/supabase-js';

// Configuração do cliente Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Configuração das variáveis de ambiente

// Determinar configuração a usar
let finalUrl: string;
let finalKey: string;
let isConfigured = true;

if (!supabaseUrl || !supabaseAnonKey) {
  // Variáveis não configuradas - usar placeholders seguros
  finalUrl = 'https://placeholder.supabase.co';
  finalKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder';
  isConfigured = false;
} else {
  // Variáveis configuradas corretamente
  finalUrl = supabaseUrl;
  finalKey = supabaseAnonKey;
  isConfigured = true;
}

// Criar cliente Supabase
export const supabase = createClient(finalUrl, finalKey);

// Marcar se cliente está configurado
(supabase as typeof supabase & { __notConfigured?: boolean }).__notConfigured = !isConfigured;