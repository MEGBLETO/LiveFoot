/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import { ScrollView } from 'react-native';
import {StyledText, StyledView} from '../styles/test';

const Test = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerShown: false,
    });
  }, [navigation]);

  return (
    <ScrollView>
      <StyledView>
        <StyledText>
          Test navigation
        </StyledText>
      </StyledView>
    </ScrollView>
  );
};

export default Test;
