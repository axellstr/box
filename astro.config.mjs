// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  // Use Vercel Image Optimization in production instead of sharp (native binary
  // mismatches often cause FUNCTION_INVOCATION_FAILED on serverless).
  adapter: vercel({
    imageService: true,
    imagesConfig: {
      sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      domains: ['placehold.co'],
      remotePatterns: [
        { protocol: 'https', hostname: 'placehold.co', pathname: '/**' },
      ],
    },
  }),
  vite: {
    plugins: [tailwindcss()]
  }
});
