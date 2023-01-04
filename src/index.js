import React from 'react';
import ReactDOM from 'react-dom/client';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import './index.css';
import translationEN from "./assets/locales/en/translation.json";
import translationFR from "./assets/locales/fr/translation.json";
import translationHI from "./assets/locales/hi/translation.json";
import App from './App';

const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  },
  hi: {
    translation: translationHI
  }
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: true,
    resources,
    fallbackLng: "en",
    detection: {
      order: ['cookie','htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'] 
    },
    // backend: {
    //   loadPath: '/assets/locales/{{lng}}/translation.json',
    // }
  });

// function App() {
//   const { t } = useTranslation();
//   return <h2>{t("x")}</h2>;
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
