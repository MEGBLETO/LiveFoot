import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";




i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // compatibilityJSON: 'v3',

    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          welcome:  {
            message: "Live football ! Stay updated with the latest scores, news, and highlights. Never miss a game again!"
          },
          langue:{
            message: "You have just switched to english"
          }
        }
      },
      fr: {
        translation: {
          welcome:  {
            message: "Football en direct ! Restez à jour avec les derniers scores, les actualités et les moments forts. Ne manquez plus jamais un match !"
          },
          langue:{
            message: "Vous aviez selectionner le francais"
          }


        }
      }
      
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });




  export default i18n;