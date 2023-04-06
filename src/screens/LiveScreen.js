import React, {useEffect, useState} from 'react';
import ThemeProvider from '../components/ThemeProvider';
import {useNavigation} from '@react-navigation/native';
import BottomNavigation from '../components/BottomNavigation';
// import {View, Text} from 'react-native';
import {
  StyledText, StyledView, StyledView2, Text2, Text3, Text4,
  Image, Image2, Container
} from '../styles/home';
import Header from '../components/header';
import Navbar from '../components/navbar';
import ThemeToggle from '../components/ThemeToggle';

const LiveScreen = () => {
  const navigation = useNavigation();

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerShown: false,
    });
  }, [navigation]);

  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <StyledView2>
        <Header/>
        <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
        <StyledView>
          <Container>
            <Container>
              <Image2 source={require('../images/ballon-foot.png')}/>
              <Text2>   France . Ligue 1 </Text2>
            </Container>
            <Container>
              <Image2 source={require('../images/classement.png')}/>
            </Container>
          </Container>
          <Container>
            <Container>
              <Text3>27' 1ère mi-temps </Text3>
            </Container>
            <Container>
              <Image2 source={require('../images/streaming.png')}/>
            </Container>
          </Container>
          <Container>
            <Container>
              <Image source={require('../images/om.png')}/>
              <StyledText>   Olympique Marseille</StyledText>
            </Container>
            <Container>
              <Text4>1</Text4>
            </Container>
          </Container>
          <Container>
            <Container>
              <Image source={require('../images/psg.png')}/>
              <StyledText>   Paris Saint Germain</StyledText>
            </Container>
            <Container>
              <Text4>2</Text4>
            </Container>
          </Container>
        </StyledView>
        <BottomNavigation />
      </StyledView2>
    </ThemeProvider>
  );
};

export default LiveScreen;