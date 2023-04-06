import { View, Text } from 'react-native'
import React from 'react'
import { PagecontainerWhite } from '../styles/HomeScreen.styles'
import BottomNavigation from '../components/BottomNavigation'
import { useNavigation } from '@react-navigation/native'

const TeamsScreen = () => {
  const navigation = useNavigation()

  return (
    <PagecontainerWhite>
    <BottomNavigation/>
   </PagecontainerWhite>
  )
}

export default TeamsScreen