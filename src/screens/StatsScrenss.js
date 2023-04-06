import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import BottomNavigation from '../components/BottomNavigation';
import {PagecontainerWhite} from '../styles/HomeScreen.styles';
import { useNavigation } from '@react-navigation/native';

const StatsScrenss = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerShown: false,
    });
  }, [navigation]);

  return (
    <PagecontainerWhite>
      <BottomNavigation />
    </PagecontainerWhite>
  );
};

export default StatsScrenss;
