export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'fr',
  messages: {
    fr: {
      welcome: 'Bienvenue dans Nuxt !',
      pages: {
        home: 'Accueil',
        about: 'À propos'
      }
    },
    en: {
      welcome: 'Welcome to Nuxt!',
      pages: {
        home: 'Home',
        about: 'About'
      }
    }
  }
}));
