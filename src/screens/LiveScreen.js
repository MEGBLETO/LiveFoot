import {View, Text} from 'react-native';
import React from 'react';
import {PagecontainerWhite} from '../styles/HomeScreen.styles';
import BottomNavigation from '../components/BottomNavigation';

const LiveScreen = () => {
  return (
    <PagecontainerWhite>
      <BottomNavigation
        home="white"
        teams="white"
        stats="white"
        live="yellow"
      />
    </PagecontainerWhite>
  );
};

export default LiveScreen;
