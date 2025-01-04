import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api/uploadImage': {
          target: env.VITE_PROXY_TARGET,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/uploadImage/, '/v0/uploadImage'),
        },
        '/api/YAGenerator': {
          target: env.VITE_PROXY_TARGET,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/YAGenerator/, '/v0/YAGenerator'),
        },
      },
    },
  }
});
