import {View, Text} from 'react-native';
import {React, useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import {TrophyIcon} from 'react-native-heroicons/solid';

const BottomNavigation = ({home, teams, stats, live}) => {
  const navigation = useNavigation();

  return (
    <StyledView>
      <StyledChiledView>
        <StyledTrophyIcon
          onPress={() => navigation.navigate('Main')}
          size={30}
          color={home}
        />
        <StyledUserGroupIcon
          onPress={() => navigation.navigate('Teams')}
          size={30}
          color={teams}
        />
        <StyledStatsIcon
          onPress={() => navigation.navigate('Stats')}
          size={30}
          color={stats}
        />
        <StyledCameraIcon
          onPress={() => navigation.navigate('Live')}
          size={30}
          color={live}
        />
      </StyledChiledView>
    </StyledView>
  );
};

export default BottomNavigation;
