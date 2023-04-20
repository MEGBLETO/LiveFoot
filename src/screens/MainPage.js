import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/header';
import {FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import {StyledView, StyledView2, LoaderView} from '../styles/home';
import BottomNavigation from '../components/BottomNavigation';
import notifee from '@notifee/react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import ThemeProvider from '../components/ThemeProvider';
import MatchCard from '../components/matchCard';
import { Text } from 'react-native';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

const adUnitId = TestIds.BANNER;
import {formatDate} from '../services/formatDate';
import axios from 'axios';

const StyledScrollView = styled.ScrollView`
  position: relative;
  z-index: -1;
  height: 100%;
  background-color: #fff;
`;

const MainPage = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const {isDarkMode} = useSelector(state => state.themeReducer);
  const {t, i18n} = useTranslation();
  const {language} = useSelector(state => state.languageReducer);
  const [isLoading, setIsLoading] = useState(false);
  const [fixture, setFixture] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  async function onDisplayNotification() {
    await notifee.requestPermission();
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    await notifee.displayNotification({
      title: 'LiveFoot',
      body: `${t('welcome.message')}`,
      android: {
        channelId,
      },
    });
  }

  useEffect(() => {
    onDisplayNotification();
  }, [language]);

  useEffect(() => {
    fetchData()
      .then(res => {
        setFixture([...fixture, ...res]);
      })
      .catch(err => console.log('no more data to render', err));
  }, []);

  useEffect(() => {
    fetchData()
      .then(res => {
        setFixture([...fixture, ...res]);
      })
      .catch(err => console.log('no more data to render', err));
  }, [currentPage]);

  const renderLoader = () => {
    return isLoading ? (
      <LoaderView>
        <ActivityIndicator size="large" color="blue" animating={true} hidesWhenStopped={true} />
        <Text style={{ color: "blue", marginTop: 10 }}>Loading...</Text>
      </LoaderView>
    ) : null;
  };


  const loadMoreItems = () => {
    setCurrentPage(currentPage + 1);
  };

  async function fetchData(current = currentPage) {
    setIsLoading(true);
    let startDate = new Date(new Date().setDate(new Date().getDate() - 2));
    let endDate = new Date(new Date().setDate(startDate.getDate() + 3));
    try {
      const res = await axios.get(
          `https://api.sportmonks.com/v3/football/fixtures/between/${formatDate(startDate)}/${formatDate(endDate)}?api_token=8hLDCAjFKrGgNrCuyeGxfsie7nXX4jaW8hCrVi75165ef2V5c1bhG2lqhO18&include=statistics;statistics.type;participants;league;league.country;lineups.type;lineups.position;lineups.details;lineups;events;events.type;state;events.participant&page=${current}`
      );
      return res.data.data;
    } catch (error) {
    }
  }
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', {data: item})}
        key={item && item._id}>
        <MatchCard data={item} />
      </TouchableOpacity>
    );
  };
  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <Header />
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
      <StyledView2>
        <StyledView>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={fixture}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListFooterComponent={renderLoader}
            onEndReached={loadMoreItems}
            onEndReachedThreshold={0.6}
          />
        </StyledView>
        <BottomNavigation
          main="yellow"
          teams="white"
          stats="white"
          live="white"
        />
      </StyledView2>
    </ThemeProvider>
  );
};

export default MainPage;
