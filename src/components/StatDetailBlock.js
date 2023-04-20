/* eslint-disable radix */
import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import {
  StatDefaultBar,
  Home,
  StatLabel,
  Away,
  StatValueLeft,
  StatValueRight,
} from '../styles/home';

const StatDetailBlock = ({
  text,
  homeValue,
  awayValue,
  homeWidth,
  awayWidth,
}) => {
  return (
    <Container>
      <StatLabel>{text}</StatLabel>
      <Views>
        <StatDefaultBar>
          <Home size={parseInt(homeWidth)} />
        </StatDefaultBar>
        <View1>
          <StatValueLeft>{homeValue}</StatValueLeft>
          <StatValueRight>{awayValue}</StatValueRight>
        </View1>
        <StatDefaultBar>
          <Away size={parseInt(awayWidth)} />
        </StatDefaultBar>
      </Views>
    </Container>
  );
};

const Views = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const View1 = styled.View`
  width: 20%;
  position: relative;
`;
const Container = styled.View`
  margin-bottom: 10px;
`;

export default StatDetailBlock;
