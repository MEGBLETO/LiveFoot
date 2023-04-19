import React, {useEffect} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchfixtures} from '../redux/actions';
import {useNavigation} from '@react-navigation/native';

const FixtureItem = styled.View`
  position: relative;
  top: 20px;
  z-index: -10;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: white;
  margin-bottom: 5px;
  border: 2px #f3f3f3;
`;

const TeamWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TeamLogo = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const TeamName = styled.Text`
  font-weight: bold;
  color: black;
`;

const Score = styled.Text`
  font-weight: bold;
  color: black;
`;

const FixturesComponent = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const fixtures = useSelector(state => state.fixturesReducer.fixtures);

  useEffect(() => {
    dispatch(fetchfixtures());
  }, [dispatch]);


  // <FixtureItem onPress={()=> navigation.navigate('Details', {id: items.lineups[0].details.fixture_id})}>

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Details', {
          id: item.lineups[0].details[0].fixture_id,
        })
      }>
      <FixtureItem>
        <TeamWrapper>
          <TeamLogo source={{uri: item.participants[0].image_path}} />
          <TeamName>{item.participants[0].name}</TeamName>
        </TeamWrapper>
        {/* <Score>{item.scores.local_score} - {item.scores.visitor_score}</Score> */}
        <Score>2- 1</Score>
        <TeamWrapper>
          <TeamName>{item.participants[1].name}</TeamName>
          <TeamLogo source={{uri: item.participants[1].image_path}} />
        </TeamWrapper>
      </FixtureItem>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={fixtures}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

export default FixturesComponent;
