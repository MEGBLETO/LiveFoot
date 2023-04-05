import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';

const ThemeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <View>
      {isDarkMode ? (
        <MenuItem onPress={onToggle}>
          <Image source={require('../images/day-mode.png')}/>
        </MenuItem>
      ) : (
        <MenuItem onPress={onToggle}>
          <Image source={require('../images/night-mode.png')}/>
        </MenuItem>
      )}
    </View>
  );
};

const MenuItem = styled.TouchableOpacity`
  padding: 1px;
  position: absolute;
  right: 77px;
  top: 25px;
`;

const Image = styled.Image`
    width: 30px;
    height: 30px;
`;

export default ThemeToggle;
