/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Test from '../screens/Test';
// import Home from '../screens/Home';
import HomeScreen from '../screens/HomeScreen';
import MainPage from '../screens/MainPage';
import LiveScreen from '../screens/LiveScreen';
import TeamsScreen from '../screens/TeamsScreen';
import StatsScrenss from '../screens/StatsScrenss';
import DetailsScreens from '../screens/DetailsScreens';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Homescreen" component={HomeScreen} />
        <Stack.Screen name="Main" component={MainPage} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Live" component={LiveScreen} />
        <Stack.Screen name="Teams" component={TeamsScreen} />
        <Stack.Screen name="Stats" component={StatsScrenss} />
        <Stack.Screen name="Details" component={DetailsScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
