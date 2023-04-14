import styled from 'styled-components';
import ThemeProvider from '../components/ThemeProvider';

export const StyledView2 = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${props => props.theme.backgroundColor};
`;

export const CardContainer = styled.View`
  margin-bottom: 10px;
  border: solid gray 1px;
  border-radius: 8px;
  padding: 10px 2px;
  background-color: ${props => props.theme.backgroundColor2};
`;

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2px 10px;
`;

export const StyledView = styled.View`
  margin: 100px 10px 0px 10px;
`;

export const StyledView3 = styled.View`
  border: solid gray 1px;
  border-radius: 8px;
  /* margin: 0px 10px 10px 10px; */
  background-color: ${props => props.theme.backgroundColor2};
`;

export const StyledText = styled.Text`
  font-size: 18px;
  padding: 5px 10px;
  margin-left: 10px;
  color: ${props => props.theme.textColor};
`;

export const Text2 = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.textColor2};
  margin-left: 10px;
`;

export const Text3 = styled.Text`
  font-size: 14px;
  margin-left: -5px;
  color: #3498db;
  margin-top: -2px;
`;

export const Text4 = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.backgroundColor2};
  padding: 1px 3px 5px 12px;
  border: solid 2px ${props => props.theme.textColor};
  border-radius: 15px;
  width: 35px;
  height: 30px;
  position: absolute;
  right: 0px;
  top: 6px;
`;

export const Image = styled.Image`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 3px;
  background: white;
  border-radius: 10px;
`;

export const Image2 = styled.Image`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 5px;
  background-color: ${props => props.theme.backgroundColor3};
  border-radius: 10px;
`;

export const Image3 = styled.Image`
  width: 20px;
  height: 11px;
  position: absolute;
  top: 0;
  right: 6px;
  background-color: ${props => props.theme.backgroundColor3};
  border-radius: 10px;
`;
