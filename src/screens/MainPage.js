/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native';
import {
  StyledView,
  StyledText,
  PagecontainerWhite,
} from '../styles/MainScreen.style';
import BottomNavigation from '../components/BottomNavigation';

const MainPage = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerShown: false,
    });
  }, [navigation]);

  return (
    <PagecontainerWhite>
      <StyledText onPress={() => navigation.navigate('Test')}>
        Hello World
      </StyledText>
      <BottomNavigation />
    </PagecontainerWhite>
  );
};

export default MainPage;
