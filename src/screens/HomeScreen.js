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




const HomeScreen = () => {

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
          Live football ! Stay updated with the latest scores, news, and highlights. Never miss a game again!
          </StyledWelcomeText>
        </MessageContainer>

        <StyleTouchableIcon onPress={() => navigation.navigate('Main')}>
            {/* <ChevronDoubleRightIcon size={20}/> */}
        </StyleTouchableIcon>
      </StyledImageBackground>
    </PagecontainerGray>
  </SafeAreaView>
  )
}

export default HomeScreen