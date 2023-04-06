import React from 'react';
import styled from 'styled-components';
// import { View } from 'react-native';

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
  right: 70px;
  top: 22px;
`;

const Image = styled.Image`
    width: 25px;
    height: 25px;
    background-color: antiquewhite;
    border-radius: 15px;
`;

const View = styled.View`
    z-index: 2000;
`;

export default ThemeToggle;
