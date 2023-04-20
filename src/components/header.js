import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyledTextLangue,
  Imagelogo,
  MenuItem,
  HeaderContainer,
  StyledMenuIcon,
} from '../styles/ComponentStyles/Header.style';

import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';
import {setLanguage, setThemeMode} from '../redux/actions';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();
  const {language} = useSelector(state => state.languageReducer);
  const {isDarkMode} = useSelector(state => state.themeReducer);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(setThemeMode(!isDarkMode));
  };

  const upDateLanguage = () => {
    if (language === 'fr') {
      dispatch(setLanguage('en'));
      i18n.changeLanguage(language);
    } else {
      dispatch(setLanguage('fr'));
      i18n.changeLanguage(language);
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
      <MenuItem onPress={() => navigation.navigate('Main')}>
        <Imagelogo source={require('../images/logo.png')} />
      </MenuItem>
      <ThemeToggle isDarkMode={isDarkMode} onToggle={() => toggleTheme()} />
      <StyledTextLangue onPress={() => upDateLanguage()}>
        {language}
      </StyledTextLangue>
    </HeaderContainer>
  );
};

export default Header;
