import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Remover define customizado - deixar Vite usar processo padrão
  // O define customizado pode estar causando corrupção da URL
});
