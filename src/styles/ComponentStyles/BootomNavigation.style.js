import styled from 'styled-components/native';
import { TrophyIcon, CameraIcon, VideoCameraIcon, ChartBarIcon, UserGroupIcon, MegaphoneIcon, Bars2Icon, Bars3BottomLeftIcon, MagnifyingGlassCircleIcon } from 'react-native-heroicons/solid';
import { LockOpen, MenuAlt1Outline, MenuOutline } from 'heroicons-react';


export const StyledView = styled.View`
  position: absolute;
  height: 100px;
  width: 100%;
  display: flex; /* enable flexbox */
  justify-content: center; /* center the content horizontally */
  align-items: center; /* center the content vertically */
  bottom: 0;
  background-color: transparent;
`;


export const StyledChiledView = styled.View `
  width: 95%;
  border-radius: 30px;
  height:   70%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #3a3955;
  /* box-shadow: ; */
 

`;

export const StyledTrophyIcon = styled(TrophyIcon)`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  color: ${({ color }) => color};
`;




export const StyledCameraIcon = styled(VideoCameraIcon)`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  color: ${({ color }) => color};
`;


export const StyledStatsIcon = styled(ChartBarIcon)`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  color: ${({ color }) => color};
`;


export const StyledUserGroupIcon = styled(UserGroupIcon)`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  color: ${({ color }) => color};
`;

export const StyledMegapphone = styled(MagnifyingGlassCircleIcon)`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  color: ${({ color }) => color};
`;



// export const PagecontainerWhite = styled.View`
//   min-height: 100%;
//   width: 100%;
//   background-color: White;
// `;

// export const StyledText = styled.Text`
// font-size: 25px;
// padding: 5px 0px;
// color: green;
// `;
