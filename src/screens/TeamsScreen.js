import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {PagecontainerWhite} from '../styles/HomeScreen.styles';
import BottomNavigation from '../components/BottomNavigation';
import {ThemeProvider, useNavigation} from '@react-navigation/native';
import Header from '../components/header';
import {useDispatch, useSelector} from 'react-redux';
import {StyledView2} from '../styles/home';

const TeamsScreen = () => {
  const navigation = useNavigation();
  const {isDarkMode} = useSelector(state => state.themeReducer);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerShown: false,
    });
  }, [navigation]);

  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <Header />
      <StyledView2>
        <BottomNavigation />
      </StyledView2>
    </ThemeProvider>
  );
};

export default TeamsScreen;
