import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Test from '../screens/Test';
import HomeScreen from '../screens/HomeScreen';
import MainPage from '../screens/MainPage';
import LiveScreen from '../screens/LiveScreen';
import TeamsScreen from '../screens/TeamsScreen';
import StatsScrenss from '../screens/StatsScrenss';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Homescreen"
          options={{
            headerShown: false,
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Main"
          component={MainPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Test"
          component={Test}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Live"
          component={LiveScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Teams"
          component={TeamsScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Stats"
          component={StatsScrenss}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
