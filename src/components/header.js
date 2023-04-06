import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import ThemeProvider from './ThemeProvider';
import ThemeToggle from './ThemeToggle';
import {
  StyledText,
  Image,
  Imagelogo,
  MenuItem,
  HeaderContainer,
  StyledMenuIcon,
  StyledGlobeIcon,
} from '../styles/ComponentStyles/Header.style';

import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';
import {setLanguage} from '../redux/actions';

const Header = () => {
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();
  const {language} = useSelector(state => state.languageReducer);
  const dispatch = useDispatch();


  const upDateLanguage = () => {
    if (language === 'fr') {
      dispatch(setLanguage('en'));
      i18n.changeLanguage(language);
      console.log(language);

    } else {
      dispatch(setLanguage('fr'));
      i18n.changeLanguage(language);
      console.log(language);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerShown: false,
    });
  }, [navigation]);

  return (
    <HeaderContainer>
      <StyledMenuIcon size={30} color="white" />
      <MenuItem onPress={() => navigation.navigate('Home')}>
        <Imagelogo source={require('../images/logo.png')} />
      </MenuItem>
      <StyledGlobeIcon
        onPress={() => upDateLanguage()}
        size={30}
        color="white"
      />
    </HeaderContainer>
  );
};

export default Header;
