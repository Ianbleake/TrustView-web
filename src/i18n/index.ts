import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import authEN from "./locales/en/auth.json";
import landingEN from "./locales/en/landing.json";
import notificationsEN from "./locales/en/notifications.json";
import authES from "./locales/es/auth.json";
import landingES from "./locales/es/landing.json";
import notificationsES from "./locales/es/notifications.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "es",
    supportedLngs: ["es", "en"],

    ns: ["landing", "auth"],
    defaultNS: "landing",

    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "lang",
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false,
    },

    resources: {
      es: {
        landing: landingES,
        auth: authES,
        notifications: notificationsES,
      },
      en: {
        landing: landingEN,
        auth: authEN,
        notifications: notificationsEN,
      },
    },
  });

export default i18n;
