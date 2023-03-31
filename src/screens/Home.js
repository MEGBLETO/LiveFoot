/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import { View } from 'react-native';

const Home = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerShown: true,
    });
  }, [navigation]);

  return (
    <View>
      <StyledText>Hello World</StyledText>
    </View>
  );
};


const StyledText = styled.Text`
  font-size: 25px;
  padding: 5px 0px;
  color: green;
`;

export default Home;
