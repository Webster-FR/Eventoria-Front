import fr from "~/langs/fr";
import en from "~/langs/en";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "fr",
  messages: {
    fr,
    en,
  }
}));
