import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Context/AuthContext'
import Riwayat from '../Components/Riwayat'
import { ScrollView } from 'react-native'
import RiwayatSarat from '../Components/RiwayatSarat'





export default function Riwayats() {
    const {userData,setUserData}=useContext(AuthContext)
   
  return (
    <ScrollView >
        <Riwayat/>
        <RiwayatSarat/>
        <View style={{height:100}}> 
        </View>
    </ScrollView> 
  )
}