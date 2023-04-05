import styled from 'styled-components/native';
import { TrophyIcon } from 'react-native-heroicons/solid';


export const StyledView = styled.View`
  position: absolute;
  height: 60px;
  border-radius: 30px;
  width: 95%;
  bottom: 10px;
  left: 50%;
  transform: translateX(-185px);
  background-color: #3a3955;
  display: flex; /* enable flexbox */
  justify-content: center; /* center the content horizontally */
  align-items: center; /* center the content vertically */
`;

export const styledTrophyIcon = styled(TrophyIcon)`
  color: yellow;
  size: 20px;
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
