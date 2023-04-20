

import styled from 'styled-components/native';


export const StyledFlatList = styled(FlatList)`
  padding-top: 100px;
`;

export const TeamRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: 10px;
`;

export const TeamItem = styled.View`
  flex: 1;
  align-items: center;
  margin: 10px;
`;

export const TeamImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const TeamName = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #333;
`;






