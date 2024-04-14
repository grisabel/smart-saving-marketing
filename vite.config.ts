import { defineConfig, type UserConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import { qwikSpeakInline } from 'qwik-speak/inline';

import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path';

export default defineConfig((): UserConfig => {
  return {
    plugins: [
      qwikCity(), 
      qwikVite(),  
      qwikSpeakInline({
        supportedLangs: ['en-US', 'es-ES'],
        defaultLang: 'es-ES',
        assetsPath: 'i18n'
      }), 
      tsconfigPaths()
    ],
    server: {
      headers: {
        "Cache-Control": "public, max-age=0",
      },
    },
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
    resolve: {
      alias: {
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@': path.resolve(__dirname, './src')
      }
    }
  };
});
