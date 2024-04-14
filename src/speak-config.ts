import type { SpeakConfig } from 'qwik-speak';

export const config: SpeakConfig = {
  defaultLocale: { lang: 'es-ES', currency: 'EUR', timeZone: 'Europe/Madrid' },
  supportedLocales: [
    { lang: 'es-ES', currency: 'EUR', timeZone: 'Europe/Madrid' },
    { lang: 'en-US', currency: 'USD', timeZone: 'America/Los_Angeles' }
  ],
  // Translations available in the whole app
  assets: [
    'app'
  ],
  // Translations with dynamic keys available in the whole app
  runtimeAssets: [
    'runtime'
  ]
};