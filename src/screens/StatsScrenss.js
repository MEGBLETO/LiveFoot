import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import BottomNavigation from '../components/BottomNavigation';
import {useNavigation} from '@react-navigation/native';
import {StyledView2} from '../styles/home';
import ThemeProvider from '../components/ThemeProvider';
import Header from '../components/header';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

const StatsScrenss = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const {isDarkMode} = useSelector(state => state.themeReducer);
  const {t, i18n} = useTranslation();

  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <Header />
      <StyledView2 />
      <BottomNavigation
        main="white"
        teams="white"
        stats="yellow"
        live="white"
      />
    </ThemeProvider>
  );
};

export default StatsScrenss;
