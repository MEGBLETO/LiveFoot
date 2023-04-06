import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native';
import {
  StyledView,
  StyledText,
  PagecontainerWhite,
} from '../styles/MainScreen.style';
import BottomNavigation from '../components/BottomNavigation';
import Header from '../components/Header';
import notifee from '@notifee/react-native';

const StyledScrollView = styled.ScrollView`
  position: relative;
  z-index: -1;
  height: 100%;
  background-color: #fff;
`;

import {useDispatch, useSelector} from 'react-redux';
import {fetchfixtures} from '../redux/actions';
import FixturesComponent from '../components/FixturesComponent';
import {useTranslation} from 'react-i18next';

const MainPage = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const {t, i18n} = useTranslation()
  const {language} = useSelector(state => state.languageReducer);
  const fixtures = useSelector(state => state.fixtures);
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

  // console.log(fixtures)

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerShown: false,
    });
  }, [navigation]);

  return (
    <PagecontainerWhite>
      <Header />
      <FixturesComponent />
      <BottomNavigation />
    </PagecontainerWhite>
  );
};

export default MainPage;
