import React from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components/native';
import {lightTheme, darkTheme} from '../config/theme';

const ThemeProvider = ({isDarkMode, children}) => {
  console.log(isDarkMode);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
