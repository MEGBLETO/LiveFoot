import {Bars3BottomLeftIcon, GlobeAltIcon} from 'react-native-heroicons/solid';
import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  position: absolute;
  z-index: 3;
  background-color: #3a3955;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const StyledText = styled.Text`
  font-size: 25px;
  padding: 5px 0px;
  color: black;
`;

export const StyledTextLangue = styled.Text`
  font-size: 25px;
  padding: 5px 0px;
  color: white;
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
`;
export const StyledMenuIcon = styled(Bars3BottomLeftIcon)`
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  color: ${({color}) => color};
  margin-top: 5px;
`;

export const StyledGlobeIcon = styled(GlobeAltIcon)`
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  color: ${({color}) => color};
`;

export const Imagelogo = styled.Image`
  width: 150px;
  height: 30px;
  border-radius: 10px;
  margin-top: 5px;
`;

export const MenuItem = styled.TouchableOpacity`
  padding: 1px;
  position: relative;
  left: 30px;
`;

export const View2 = styled.View``;

export const View = styled.View``;
