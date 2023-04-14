/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createRoot} from 'react-dom/client';
import i18n from 'i18next';
import {useTranslation, initReactI18next} from 'react-i18next';

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
          welcome: {
            message:
              'Live football ! Stay updated with the latest scores, news, and highlights. Never miss a game again!',
          },
          langue: {
            message: 'You have just switched to english',
          },
          home: {
            message: 'Home',
          },
          recherche:{
            message: "Search"
          },
          teams: {
            message: 'teams',
          },
          ranking: {
            message: 'Rankings',
          },
          live: {
            message: 'Live',
          },
          playDateToday: {
            message: `Today at`
          },
          playedDateMinusOneDay: {
            message: `Yesterday at`
          },
          playedDateMinusTwoDay: {
            message: `Day before yesterday at`
          },
          playDatePlusOneDay: {
            message: `Tomorrow at`
          },
          playDatePlusTwoDay: {
            message: `Day after tomorrow at`
          },
          noLiveData: {
            message: `No matches in progress, come back later!`
          }
        },
      },
      fr: {
        translation: {
          welcome: {
            message:
              'Football en direct ! Restez à jour avec les derniers scores, les actualités et les moments forts. Ne manquez plus jamais un match !',
          },
          langue: {
            message: 'Vous aviez selectionner le francais',
          },
          home: {
            message: 'Accueil',
          },
          recherche:{
            message: "Recherche"
          },
          teams: {
            message: 'Equipe',
          },
          ranking: {
            message: 'Classements',
          },
          live: {
            message: 'Direct',
          },
          playDateToday: {
            message: `Aujourd'hui à`
          },
          playedDateMinusOneDay: {
            message: `Hier à`
          },
          playedDateMinusTwoDay: {
            message: `Avant-hier à`
          },
          playDatePlusOneDay: {
            message: `Demain à`
          },
          playDatePlusTwoDay: {
            message: `Apres-demain à`
          },
          noLiveData: {
            message: `Aucun match en cours, revenez plus tard !`
          }
        },
      },
    },
    lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
