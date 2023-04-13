import styled from 'styled-components/native';

export const StyledView = styled.View`
  border: solid red 3px;
  width: 100%;
  padding: 10px;
`;

export const PagecontainerWhite = styled.SafeAreaView`
  position: relative;
  flex: 1;
  background-color: white;
  width: 100%;
`;

export const StyledText = styled.Text`
  font-size: 25px;
  padding: 5px 0px;
  color: green;
`;

export const StyledScrollView = styled.ScrollView`
  position: relative;
  z-index: -1;
  height: 100%;
`;
