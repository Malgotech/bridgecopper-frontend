// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import fr from "./locales/fr/translation.json";
import es from "./locales/es/translation.json";
import de from "./locales/de/translation.json";
import it from "./locales/it/translation.json";
import hi from "./locales/hi/translation.json";
import ar from "./locales/ar/translation.json";
import zh from "./locales/zh/translation.json"; 

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      es: { translation: es },
      de: { translation: de },
      it: { translation: it },
      hi: { translation: hi },
      ar: { translation: ar },
      zh: { translation: zh },  
    },
    lng: "en",  
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
