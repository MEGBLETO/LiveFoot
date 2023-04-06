import {View, Text} from 'react-native';
import React from 'react';
import {PagecontainerWhite} from '../styles/HomeScreen.styles';
import BottomNavigation from '../components/BottomNavigation';

const TeamsScreen = () => {
  return (
    <PagecontainerWhite>
      <BottomNavigation
        home="white"
        teams="yellow"
        stats="white"
        live="white"
      />
    </PagecontainerWhite>
  );
};

export default TeamsScreen;
