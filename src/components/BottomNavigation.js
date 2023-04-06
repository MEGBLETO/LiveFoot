import {View, Text} from 'react-native';
import React from 'react';
import {
  StyledCameraIcon,
  StyledChiledView,
  StyledStatsIcon,
  StyledTrophyIcon,
  StyledUserGroupIcon,
  StyledMegapphone,
  StyledView,
  StyledMenuIcon,
} from '../styles/ComponentStyles/BootomNavigation.style';
import { useNavigation } from '@react-navigation/native';
import {TrophyIcon} from 'react-native-heroicons/solid';


const BottomNavigation = () => {

  const navigation = useNavigation();

  return (
    <StyledView>
      <StyledChiledView>
        <StyledTrophyIcon onPress={()=> navigation.navigate('Main')} size={30} color="yellow" />
        <StyledMegapphone size={30} color="white" />
        <StyledUserGroupIcon onPress={()=> navigation.navigate('Teams')} size={30} color="white" />
        <StyledStatsIcon onPress={()=> navigation.navigate('Stats')} size={30} color="white" />
        <StyledCameraIcon onPress={()=> navigation.navigate('Live')} size={30} color="white" />
      </StyledChiledView>
    </StyledView>
  );
};

export default BottomNavigation;
