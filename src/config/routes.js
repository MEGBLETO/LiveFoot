/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Test from '../screens/Test';
import HomeScreen from '../screens/HomeScreen';
import MainPage from '../screens/MainPage';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen name="Homescreen" component={HomeScreen} /> */}
        <Stack.Screen name="Main" component={MainPage} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
