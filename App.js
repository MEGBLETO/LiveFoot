import React, {useState, useEffect} from 'react';
import Routes from './src/config/routes';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store';
import styled, {ThemeProvider} from 'styled-components/native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen';

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

  useEffect(() => {
    SplashScreen.hide();
  }, [])


  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme} >
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
