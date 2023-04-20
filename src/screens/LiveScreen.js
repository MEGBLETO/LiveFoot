import React, {useEffect, useState} from 'react';
import ThemeProvider from '../components/ThemeProvider';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import BottomNavigation from '../components/BottomNavigation';
import {StyledView, StyledView2} from '../styles/home';
import Header from '../components/header';
import {useSelector, useDispatch} from 'react-redux';
import {TextM} from '../styles/LiveScreen';
import MatchCard from '../components/matchCard';
import {FlatList} from 'react-native';
import {useTranslation} from 'react-i18next';
import {formatDate} from '../services/formatDate';

const LiveScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {t, i18n} = useTranslation();

  const {isDarkMode} = useSelector(state => state.themeReducer);
  const [LiveFoot, setLiveFoot] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(
  //   new Date(new Date().setDate(startDate.getDate() + 1)),
  // );
  const [ErrorMessage, setErrorMessage] = useState(
    `${t('noLiveData.message')}`,
  );

  useEffect(() => {
    setErrorMessage(`${t('noLiveData.message')}`);
  }, [t]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    fetchData();
    // const interval2 = setInterval(() => {
    //   console.log('fetch');
    //   fetchData();
    // }, 7000);

    // return () => clearInterval(interval2);
  }, []);

  const fetchData = () => {
    // let start = formatDate(startDate);
    // let end = formatDate(startDate);
    // const apiUrl = `https://api.sportmonks.com/v3/football/fixtures/between/${start}/${end}?api_token=8hLDCAjFKrGgNrCuyeGxfsie7nXX4jaW8hCrVi75165ef2V5c1bhG2lqhO18&include=statistics;statistics.type;participants;league;league.country;lineups.type;lineups.position;lineups.details;lineups;events;events.type;state;events.participant`;
    const apiUrl =
      'https://api.sportmonks.com/v3/football/livescores/inplay?api_token=8hLDCAjFKrGgNrCuyeGxfsie7nXX4jaW8hCrVi75165ef2V5c1bhG2lqhO18&include=statistics;statistics.type;participants;league;league.country;lineups.type;lineups.position;lineups.details;lineups;events;events.type;state;events.participant';

    axios
      .get(apiUrl)
      .then(response => {
        if (response.data.data === null || response.data.data === undefined) {
        } else {
          // const filtre = response.data.data.sort(
          //   (a, b) => a.starting_at_timestamp - b.starting_at_timestamp,
          // );
          setLiveFoot(response.data.data);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <Header />
      <StyledView2>
        <StyledView>
          <FlatList
            data={LiveFoot}
            renderItem={({item}) => <MatchCard data={item} />}
            keyExtractor={item => item.id}
            ListEmptyComponent={() => <TextM>{ErrorMessage}</TextM>}
          />
          {/* {LiveFoot.length === 0 ? (
            <TextM>{ErrorMessage}</TextM>
          ) : (
            <FlatList
              data={LiveFoot}
              renderItem={({item}) => <MatchCard data={item} />}
              keyExtractor={item => item.id}
              ListEmptyComponent={() => <TextM>{ErrorMessage}</TextM>}
            />
          )} */}
        </StyledView>
        <BottomNavigation
          main="white"
          teams="white"
          stats="white"
          live="yellow"
        />
      </StyledView2>
    </ThemeProvider>
  );
};

export default LiveScreen;
