// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', "@nuxtjs/i18n", "shadcn-nuxt"],
  devtools: { enabled: true },
  tailwindcss: {
    cssPath: ['assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    viewer: true,
  },
  colorMode: {
    classSuffix: '',
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  }
});
