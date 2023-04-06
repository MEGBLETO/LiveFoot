import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text, View1, MenuItem, Text2, Image
} from '../styles/navbar';

const Navbar = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerShown: false,
    });
  }, [navigation]);

  return (
      <View1>
        <MenuItem onPress={() => navigation.navigate('Home')}>
            <Image source={require('../images/home.png')}/>
            <Text>Home</Text>
        </MenuItem>
        <MenuItem onPress={() => navigation.navigate('Test')}>
            <Image source={require('../images/search.png')}/>
            <Text>Search</Text>
        </MenuItem>
        <MenuItem onPress={() => navigation.navigate('Home')}>
            <Image source={require('../images/live.png')}/>
            <Text>Live</Text>
        </MenuItem>
        <MenuItem onPress={() => navigation.navigate('Home')}>
            <Image source={require('../images/stat.png')}/>
            <Text>Classement</Text>
        </MenuItem>
      </View1>
  );
};

export default Navbar;


