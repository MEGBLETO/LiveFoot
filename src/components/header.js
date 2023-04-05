import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import ThemeProvider from './ThemeProvider';
import ThemeToggle from './ThemeToggle';
import {
  StyledText, View, Image, Imagelogo, MenuItem
} from '../styles/header';

const Header = () => {
  const navigation = useNavigation();

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerShown: false,
    });
  }, [navigation]);

  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <View>
        <Image source={require('../images/menu2.png')} />
        <MenuItem onPress={() => navigation.navigate('Home')} >
          <Imagelogo source={require('../images/logo.png')} />
        </MenuItem>
        <Image source={require('../images/langues.png')} />
      </View>
    </ThemeProvider>
  );
};

export default Header;
