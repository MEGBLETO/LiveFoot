import styled from 'styled-components';
import ThemeProvider from '../components/ThemeProvider';

export const View1 = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  padding: 10px 20px;
`;

export const MenuItem = styled.TouchableOpacity`
  padding: 1px 10px;
  align-items: center;
`;

export const Image = styled.Image`
  width: 30px;
  height: 30px;
`;

export const Text = styled.Text`
  color: ${props => props.theme.textColor};
`;
