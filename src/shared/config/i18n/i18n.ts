import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import kz from "./locales/kz.json";
import ru from "./locales/ru.json";

const resources = {
  en: en,
  kz: kz,
  ru: ru,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "ru",
    supportedLngs: ["ru", "en", "kz", "chi"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["path", "cookie", "localStorage"],
      lookupFromPathIndex: 1,
    },
    resources,
  });

export default i18n;
