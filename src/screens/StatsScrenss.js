import {View, Text} from 'react-native';
import React from 'react';
import BottomNavigation from '../components/BottomNavigation';
import {PagecontainerWhite} from '../styles/HomeScreen.styles';

const StatsScrenss = () => {
  return (
    <PagecontainerWhite>
      <BottomNavigation
        home="white"
        teams="white"
        stats="yellow"
        live="white"
      />
    </PagecontainerWhite>
  );
};

export default StatsScrenss;
