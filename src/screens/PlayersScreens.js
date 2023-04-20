import {View, Text, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import BottomNavigation from '../components/BottomNavigation';
import {StyledView2} from '../styles/home';
import ThemeProvider from '../components/ThemeProvider';
import Header from '../components/header';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import Swiper from 'react-native-deck-swiper';
import {StyledText} from '../styles/test';
import styled from 'styled-components/native';
import {useRoute, useNavigation} from '@react-navigation/native';
import axios from 'axios';

export default function PlayersScreens() {
  const route = useRoute();
  const {teamName} = route.params;
  const navigation = useNavigation();
  const {isDarkMode} = useSelector(state => state.themeReducer);

  const dispatch = useDispatch();
  const {t, i18n} = useTranslation();
  const {language} = useSelector(state => state.languageReducer);
  const [playersidcard, setPlayersidCard] = useState([]);

  const getPlayers = async () => {
    const playersData = [];
    try {
      const response = await axios.get(
        `https://api.sportmonks.com/v3/football/teams/search/${teamName}`,
        {
          params: {
            api_token:
              '8hLDCAjFKrGgNrCuyeGxfsie7nXX4jaW8hCrVi75165ef2V5c1bhG2lqhO18',
            include: 'players',
          },
        },
      );

      if (response.data.data != null || response.data.data != undefined) {
        const players = response.data.data[0].players;
        const playerPromises = [];
        for (const player of players) {
          playerPromises.push(
            axios.get(
              `https://api.sportmonks.com/v3/football/players/${player.player_id}?api_token=CjDvBzmtKDVn3RWgPAzcaLUYoheYE6GFeXASUgjVnvLuwGSuW3QuFfrHi6py`,
            ),
          );
        }
        const playerResponses = await Promise.all(playerPromises);
        const filteredPlayersData = playerResponses
          .map(playerResponse => playerResponse.data.data)
          .filter(playerData => playerData != undefined && playerData != null);

        setPlayersidCard(filteredPlayersData);

        console.log(filteredPlayersData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlayers();
  }, [teamName]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerShown: false,
    });
  }, [navigation]);

  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <Header />

      {playersidcard ? (
        <Swiper
          cards={playersidcard}
          renderCard={card => (
            <Card>
              <CardImage source={{uri: card?.image_path}} />
              <CardText>{card?.common_name}</CardText>
              <CustomText>{card?.date_of_birth}</CustomText>
            </Card>
          )}
          onSwiped={cardIndex => console.log('Card swiped: ', cardIndex)}
          onSwipedAll={() => console.log('All cards swiped')}
          cardIndex={0}
          backgroundColor={isDarkMode ? '#000000' : '#FFF'}
          stackSize={3}
        />
      ) : (
        <Text>Loading....</Text>
      )}
      <BottomNavigation
        main="white"
        teams="yellow"
        stats="white"
        live="white"
      />
    </ThemeProvider>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: green;
`;

const Card = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  border-width: 2px;
  border-color: #e8e8e8;
`;

const CardImage = styled(Image)`
  width: 50%;
  height: 30%;
  resize-mode: cover;
`;

const CardText = styled.Text`
  font-size: 24px;
  margin-top: 16px;
`;


const CustomText = styled.Text`
  font-size: 10px;
  margin-top: 16px;
`;
