import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Button } from 'react-native'
import Services from '../Shared/Services'
import { AuthContext } from '../Context/AuthContext'
import WelcomeHeader from '../Components/WelcomeHeader'
import SearchBar from '../Components/SearchBar'
import GlobalApi from '../Shared/GlobalApi'
import Slider from '../Components/Slider'
import VideoCourseList from '../Components/VideoCourseList'
import Menu from '../Components/Menu'
import Ujian from '../Components/Ujian'
import UjianSarat from '../Components/UjianSarat'
import { ScrollView } from 'react-native'





export default function Jadwal() {
    const {userData,setUserData}=useContext(AuthContext)
   
  return (
    <ScrollView >
        <Ujian/>
        <UjianSarat/>
        <View style={{height:100}}> 
        </View>
    </ScrollView> 
  )
}