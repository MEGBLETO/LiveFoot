import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import {useNavigation} from '@react-navigation/native';
import {
  StyleTouchableOpacity,
  MessageContainer,
  StyledWelcomeText,
  StyledImageBackground,
  StyleTouchableIcon,
  PagecontainerGray,
} from '../styles/HomeScreen.styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import bgimage from '../assets/bg.jpg';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../redux/actions';







const HomeScreen = () => {
  const {t, i18n} = useTranslation()
  const {language} = useSelector(state => state.languageReducer)

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView>
    <PagecontainerGray>
      <StyledImageBackground source={bgimage}>
        <MessageContainer>
          <StyledWelcomeText>
            {t('welcome.message')}
          </StyledWelcomeText>
        </MessageContainer>
        <StyleTouchableIcon onPress={() => navigation.navigate('Main')}>
        </StyleTouchableIcon>
      </StyledImageBackground>
    </PagecontainerGray>
  </SafeAreaView>
  )
}

export default HomeScreen