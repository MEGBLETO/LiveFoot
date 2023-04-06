/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import Routes from './src/config/routes';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store';
import styled, {ThemeProvider} from 'styled-components/native';
import { Header } from 'react-native/Libraries/NewAppScreen';

const lightTheme = {
  backgroundColor: 'black',
  textColor: '#000',
};

const darkTheme = {
  backgroundColor: 'black',
  textColor: '#fff',
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = isDarkMode ? darkTheme : lightTheme;


  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme} >
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
