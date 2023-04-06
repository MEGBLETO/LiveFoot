import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {PagecontainerWhite} from '../styles/HomeScreen.styles';
import BottomNavigation from '../components/BottomNavigation';
import { useNavigation } from '@react-navigation/native';

const LiveScreen = () => {


const navigation = useNavigation()

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

export default LiveScreen;
