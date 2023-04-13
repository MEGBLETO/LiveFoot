import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/header';
import {FlatList, Text} from 'react-native';
import {StyledView, StyledView2} from '../styles/home';
import BottomNavigation from '../components/BottomNavigation';
import notifee from '@notifee/react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import ThemeProvider from '../components/ThemeProvider';
import MatchCard from '../components/matchCard';
import {fetchfixtures} from '../redux/actions';

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
  const {fixtures} = useSelector(state => state.fixturesReducer);
  const loading = useSelector(state => state.loading);

  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'LiveFoot',
      body: `${t('welcome.message')}`,
      android: {
        channelId,
        // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // // pressAction is needed if you want the notification to open the app when pressed
        // pressAction: {
        //   id: 'default',
        // },
      },
    });
  }

  useEffect(() => {
    onDisplayNotification();
  }, [language]);

  useEffect(() => {
    dispatch(fetchfixtures());
  }, []);
  console.log(fixtures);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerShown: false,
    });
  }, [navigation]);

  return (
    // <PagecontainerWhite>
    //   <Header />
    //   <FixturesComponent />
    //   <BottomNavigation />
    // </PagecontainerWhite>
    <ThemeProvider isDarkMode={isDarkMode}>
      <Header />
      <StyledView2>
        <StyledView>
          <FlatList
            data={fixtures}
            renderItem={({item}) => <MatchCard data={item} />}
            keyExtractor={item => item.id}
          />
        </StyledView>
        <BottomNavigation />
      </StyledView2>
    </ThemeProvider>
  );
};

export default MainPage;
