// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', "@nuxtjs/i18n"],
  devtools: { enabled: true },
  tailwindcss: {
    cssPath: ['assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    viewer: true,
  },
  colorMode: {
    classPrefix: '',
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
  }
});
