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
import {useNavigation} from '@react-navigation/native';
import {TrophyIcon} from 'react-native-heroicons/solid';
import styled from 'styled-components/native';
import {useTranslation} from 'react-i18next';

const Wrapper = styled.View`
  flex-direction: column;
  align-items: center;
`;

const TextDet = styled.Text`
  font-size: 16px;
  color: white;
`;

const BottomNavigation = () => {
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();

  return (
    <StyledView>
      <StyledChiledView>
        <Wrapper>
          <StyledTrophyIcon
            onPress={() => navigation.navigate('Main')}
            size={30}
            color="yellow"
          />
          <TextDet> {t('home.message')}</TextDet>
        </Wrapper>

        <Wrapper>
          <StyledMegapphone
            onPress={() => navigation.navigate('Main')}
            size={30}
            color="white"
          />
          <TextDet> {t('recherche.message')}</TextDet>
        </Wrapper>

        <Wrapper>
          <StyledUserGroupIcon
            onPress={() => navigation.navigate('Teams')}
            size={30}
            color="white"
          />
          <TextDet>{t('teams.message')}</TextDet>
        </Wrapper>

        <Wrapper>
          <StyledStatsIcon
            onPress={() => navigation.navigate('Stats')}
            size={30}
            color="white"
          />
          <TextDet>{t('ranking.message')}</TextDet>
        </Wrapper>

        <Wrapper>
          <StyledCameraIcon
            onPress={() => navigation.navigate('Live')}
            size={30}
            color="white"
          />
          <TextDet>{t('live.message')}</TextDet>
        </Wrapper>
      </StyledChiledView>
    </StyledView>
  );
};

export default BottomNavigation;
