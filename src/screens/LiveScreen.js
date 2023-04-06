import React, {useEffect, useState} from 'react';
import ThemeProvider from '../components/ThemeProvider';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import BottomNavigation from '../components/BottomNavigation';
import {View, Text, Message} from 'react-native';
import {
  StyledText, StyledView, StyledView2, Text2, Text3, Text4,
  Image, Image2, Container, TextM
} from '../styles/LiveScreen';
import Header from '../components/header';
import ThemeToggle from '../components/ThemeToggle';

const LiveScreen = () => {
  const navigation = useNavigation();

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const [LiveFoot, setLiveFoot] = useState(null);

  const [ErrorMessage, setErrorMessage] = useState('Aucun match en cours, revenez plus tard !');

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    const apiUrl = `https://api.sportmonks.com/v3/football/livescores/inplay?api_token=CjDvBzmtKDVn3RWgPAzcaLUYoheYE6GFeXASUgjVnvLuwGSuW3QuFfrHi6py`;
  
    axios.get(apiUrl)
      .then(response => {
        if (response.data.data === null || response.data.data === undefined) {
          console.log("bonjour");
        } else {
          setLiveFoot(response.data.data);
          console.log(response.data.data, 'Resultat');
        }
      })
      .catch(err => console.log(err));
  }, []);
  
  

  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <StyledView2>
        <Header/>
        <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
        <StyledView>
          {LiveFoot === null || LiveFoot === undefined ? (
            <TextM>{ErrorMessage}</TextM>
          ) : (
            <>
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
                  <Text4>0</Text4>
                </Container>
              </Container>
              <Container>
                <Container>
                  <Image source={require('../images/psg.png')}/>
                  <StyledText>   Paris Saint Germain</StyledText>
                </Container>
                <Container>
                  <Text4>1</Text4>
                </Container>
              </Container>
            </>
          )}
        </StyledView>
        <BottomNavigation />
      </StyledView2>
    </ThemeProvider>
  );
};

export default LiveScreen;