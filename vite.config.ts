import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode)
  },
  build: mode !== 'production'
    ? undefined
    : {
        lib: {
          entry: 'src/main.tsx',
          name: 'ChatbotWidget',
          fileName: 'chatbot-widget',
          formats: ['iife'],
        },
        rollupOptions: {
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        },
      },
}));
