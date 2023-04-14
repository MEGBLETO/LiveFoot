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

const LiveScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {t, i18n} = useTranslation();

  const {isDarkMode} = useSelector(state => state.themeReducer);
  const [LiveFoot, setLiveFoot] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(new Date().setDate(startDate.getDate() + 1)),
  );
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
    let start = formatDate(startDate);
    let end = formatDate(endDate);
    const apiUrl = `https://api.sportmonks.com/v3/football/fixtures/between/${start}/${end}?api_token=CjDvBzmtKDVn3RWgPAzcaLUYoheYE6GFeXASUgjVnvLuwGSuW3QuFfrHi6py&include=statistics;statistics.type;participants;league;league.country;lineups.type;lineups.position;lineups.details;lineups;events;events.type;state;events.participant`;
    // 'https://api.sportmonks.com/v3/football/livescores/inplay?api_token=CjDvBzmtKDVn3RWgPAzcaLUYoheYE6GFeXASUgjVnvLuwGSuW3QuFfrHi6py';

    axios
      .get(apiUrl)
      .then(response => {
        if (response.data.data === null || response.data.data === undefined) {
        } else {
          setLiveFoot(response.data.data);
        }
      })
      .catch(err => console.log(err));
  }, [startDate, endDate]);

  const formatDate = date => {
    let dateMonth =
      date.getMonth() < 8 ? `0${date.getMonth()}` : date.getMonth();

    let dateDay = date.getDate() < 9 ? `0${date.getDate()}` : date.getDate();

    return `${date.getFullYear()}-${dateMonth}-${dateDay}`;
  };

  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <Header />
      <StyledView2>
        <StyledView>
          {LiveFoot === null || LiveFoot === undefined ? (
            <TextM>{ErrorMessage}</TextM>
          ) : (
            <FlatList
              data={LiveFoot}
              renderItem={({item}) => <MatchCard data={item} />}
              keyExtractor={item => item.id}
            />
          )}
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
