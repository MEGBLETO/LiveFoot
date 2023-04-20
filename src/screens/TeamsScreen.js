import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import axios from 'axios';
import styled from 'styled-components/native';
import ThemeProvider from '../components/ThemeProvider';
import Header from '../components/header';
import BottomNavigation from '../components/BottomNavigation';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

const adUnitId = TestIds.BANNER;

const TeamsScreen = () => {
  const navigation = useNavigation();
  const {isDarkMode} = useSelector(state => state.themeReducer);
  const dispatch = useDispatch();
  const {t, i18n} = useTranslation();
  const {language} = useSelector(state => state.languageReducer);
  const [teams, setTeams] = useState([]);
  const [page, setPage] = useState(1);
  const [players, setPlayers] = useState([]);

  const fetchTeams = async () => {
    try {
      const response = await axios.get(
        'https://api.sportmonks.com/v3/football/teams',
        {
          params: {
            api_token:
              '8hLDCAjFKrGgNrCuyeGxfsie7nXX4jaW8hCrVi75165ef2V5c1bhG2lqhO18',
            include: 'players',
            page: page,
          },
        },
      );
      setTeams(prevTeams => [...prevTeams, ...response.data.data]);
      setPlayers(prevPlayers => [
        ...prevPlayers,
        ...response.data.data[0].players,
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleScrollEnd = () => {
    fetchTeams();
  };

  useEffect(() => {
    fetchTeams();
  }, [page]);

  useEffect(() => {
    // console.log(players)
  }, [players]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerShown: false,
    });
  }, [navigation]);

  const renderTeamItem = ({item}) => {
    return (
      <TeamItem key={item.id}>
        <TouchableOpacity
          onPress={() => navigation.navigate('players', {teamName: item.name})}>
          <TeamImage source={{uri: item.image_path}} />
          <TeamName>{item.name}</TeamName>
        </TouchableOpacity>
      </TeamItem>
    );
  };

  const formatData = (data, numColumns) => {
    const numOfRows = Math.ceil(data.length / numColumns);
    const formattedData = new Array(numOfRows).fill(null).map((_, rowIndex) => {
      const rowItems = data.slice(
        rowIndex * numColumns,
        (rowIndex + 1) * numColumns,
      );
      return {id: `row-${rowIndex}`, data: rowItems};
    });
    return formattedData;
  };

  const numColumns = 3;

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
      <StyledFlatList
        data={formatData(teams, numColumns)}
        renderItem={({item}) => (
          <TeamRow>
            {item.data.map(team => renderTeamItem({item: team}))}
          </TeamRow>
        )}
        keyExtractor={item => item.id}
        onEndReached={handleScrollEnd}
        onEndReachedThreshold={0.5}
        contentContainerStyle={{paddingBottom: 50}}
      />
      <BottomNavigation
        main="white"
        teams="yellow"
        stats="white"
        live="white"
      />
    </ThemeProvider>
  );
};

export default TeamsScreen;

const StyledFlatList = styled(FlatList)`
  padding-top: 100px;
`;

const TeamRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: 10px;
`;

const TeamItem = styled.View`
  flex: 1;
  align-items: center;
  margin: 10px;
`;

const TeamImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const TeamName = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #333;
`;
