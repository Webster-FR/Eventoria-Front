export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'fr',
  messages: {
    fr: {
      welcome: 'Bienvenue dans Nuxt !',
      themes: {
        dark: 'Sombre',
        light: 'Clair',
        system: 'Système',
      },
    },
    en: {
      welcome: 'Welcome to Nuxt!',
      themes: {
        dark: 'Dark',
        light: 'Light',
        system: 'System',
      },
    }
  }
}));
