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
import Notif from '../Components/Notif'
import { ScrollView } from 'react-native'
import ListNotif from '../Components/ListNotif'



export default function Pemberitahuan() {
    const {userData,setUserData}=useContext(AuthContext)
   
  return (
    <ScrollView >
        <Notif/>
      
        {/* <Menu/> */}
        <ListNotif/>
        <View style={{height:100}}> 
          
        </View>
    </ScrollView> 
  )
}