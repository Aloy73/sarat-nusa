import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Context/AuthContext'
import Hasil from '../Components/Hasil'
import { ScrollView } from 'react-native'
import HasilSarat from '../Components/HasilSarat'





export default function Hasils() {
    const {userData,setUserData}=useContext(AuthContext)
   
  return (
    <ScrollView >
        <Hasil/>
        <HasilSarat/>
        <View style={{height:100}}> 
        </View>
    </ScrollView> 
  )
}