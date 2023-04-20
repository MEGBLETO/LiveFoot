import React from 'react';
import {createRoot} from 'react-dom/client';
import i18n from 'i18next';
import {useTranslation, initReactI18next} from 'react-i18next';

i18n
  .use(initReactI18next) 
  .init({

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
            message: `No matches in progress, come back later !`
          },
          first_half: {
            message: `1st Half`
          },
          second_half: {
            message: `2nd Half`
          },
          half_time: {
            message: `Half Time`
          },
          goBack: {
            message: `Back`
          },
          statText: {
            message: 'Statistics'
          }, possession: {
            message: "Possession"
          }, totalAttempt: {
            message: "Total attemps"
          }, sont: {
            message: "Shots on target"
          }, soft: {
            message: "Shots off target"
          }, penalties: {
            message: "Penalties"
          }, yc: {
            message: "Yellow cards"
          }, rc: {
            message: "Red cards"
          }, fouls: {
            message: "Fouls"
          }, offsides: {
            message: "Offsides"
          }, corners: {
            message: "Corners"
          }, crosses: {
            message: "Crosses"
          }, throwins: {
            message: "Throw in"
          }, substitution: {
            message: "Substitutions"
          }, passes: {
            message: "Passes"
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
            message: 'Vous avez selectionné le français',
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
          },
          first_half: {
            message: `1ère mi-temps`
          },
          second_half: {
            message: `2de mi-temps`
          },
          half_time: {
            message: `Mi-temps`
          },
          goBack: {
            message: `Retour`
          },
          statText: {
            message: 'Statistiques'
          }, possession: {
            message: "Possession"
          }, totalAttempt: {
            message: "Total de tir(s)"
          }, sont: {
            message: "Tirs cadrés"
          }, soft: {
            message: "Tirs non cadrés"
          }, penalties: {
            message: "Penaltis"
          }, yc: {
            message: "Cartons jaunes"
          }, rc: {
            message: "Cartons rouges"
          }, fouls: {
            message: "Fautes"
          }, offsides: {
            message: "Hors-jeu"
          }, corners: {
            message: "Corners"
          }, crosses: {
            message: "Coup-franc"
          }, throwins: {
            message: "Touches"
          }, substitution: {
            message: "Remplacements"
          }, passes: {
            message: "Passes"
          }
        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
