/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import { ScrollView } from 'react-native';

const Home = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerShown: true,
    });
  }, [navigation]);

  return (
    <ScrollView>
      <StyledView>
        <StyledText onPress={() => navigation.navigate('Test')}>Hello World</StyledText>
      </StyledView>
    </ScrollView>
  );
};

const StyledView = styled.View`
  border: solid red 3px;
`;

const StyledText = styled.Text`
  font-size: 25px;
  padding: 5px 0px;
  color: green;
`;

export default Home;
