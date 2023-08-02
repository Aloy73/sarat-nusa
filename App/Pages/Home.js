import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Context/AuthContext'
import WelcomeHeader from '../Components/WelcomeHeader'
import Slider from '../Components/Slider'
import Menu from '../Components/Menu'
import { ScrollView } from 'react-native'




export default function Home() {
  const { userData, setUserData } = useContext(AuthContext)

  return (
      <View>
      <ScrollView >
        <WelcomeHeader />
        <Slider />
        <Menu />
        <View style={{ height: 100 }}>
        </View>
      </ScrollView>
      </View>
 
  )
}