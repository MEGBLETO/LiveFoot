/* eslint-disable prettier/prettier */
import React from 'react';
import Routes from './src/config/routes';


const App = () => {
  return <Routes />;
};

export default App;

// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import i18n from 'i18n';
// import i18next from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import en from './src/locales/en.json';
// import fr from './src/locales/fr.json';

// i18n.use(initReactI18next).init({
//   lng: 'en',
//   fallbackLng: 'en',
//   resources: {
//     en: {
//       translation: en,
//     },
//     fr: {
//       translation: fr,
//     },
//   },
// });

// export default function App() {
//   const [lang, setLang] = useState(i18n.language);

//   useEffect(() => {
//     const currentLang = i18n.language;
//     setLang(currentLang);
//   }, []);

//   const changeLanguage = (lang) => {
//     i18n.changeLanguage(lang);
//     setLang(lang);
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       {lang === 'en' ? (
//         <TouchableOpacity onPress={() => changeLanguage('fr')}>
//           <Text>FR</Text>
//         </TouchableOpacity>
//       ) : (
//         <TouchableOpacity onPress={() => changeLanguage('en')}>
//           <Text>EN</Text>
//         </TouchableOpacity>
//       )}
//       <Text>{i18n.t('welcome')}</Text>
//       <Text>{i18n.t('hello')}</Text>
//       <Text>{i18n.t('goodbye')}</Text>
//     </View>
//   );
// }

