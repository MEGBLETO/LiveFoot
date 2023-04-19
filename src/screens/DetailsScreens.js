import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import { PagecontainerWhite } from '../styles/HomeScreen.styles';
import {useRoute, useNavigation} from '@react-navigation/native';
import axios from 'axios';


const DetailsScreens = () => {

const navigation = useNavigation()

const route = useRoute()

const id = route.params.id




const  getFixtureDetails = async() =>{
  try {
  const res = await axios.get(`https://api.sportmonks.com/v3/football/fixtures/${id}?api_token=CjDvBzmtKDVn3RWgPAzcaLUYoheYE6GFeXASUgjVnvLuwGSuW3QuFfrHi6py&include=scores;participants;statistics`)
  } catch (error) {
    
  }
}


useEffect(()=>{
  if(id != null  || id != undefined){
      getFixtureDetails()
  }
},[id])

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerShown: false,
    });
  }, [navigation]);


  return (
    <PagecontainerWhite>

    </PagecontainerWhite>
  )
}

export default DetailsScreens