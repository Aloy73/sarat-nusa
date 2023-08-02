import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigation } from '@react-navigation/native';
import Colors from '../Shared/Colors'


export default function Pemberitahuan() {
    const navigation = useNavigation();
    const {userData,setUserData}=useContext(AuthContext)
  return (
  
    <View style={styles.container}>
      
   
        <View>
        <TouchableOpacity onPress={() => navigation.goBack()} >
        <Image source={require('./../Assets/Images/panah.png')}
        style={{width:20,height:20,borderRadius:100, marginTop:30}}
        />
        </TouchableOpacity>
      
         <Text style={{marginLeft:115,marginTop:-23,fontSize:20,fontWeight:'bold'}}>Akun</Text>
        
        </View>


      
         
    </View>
    
  )
}


const styles = StyleSheet.create({
        container:{
            display:'flex',
            // borderRadius:10,
            borderBottomLeftRadius:60,
            borderBottomRightRadius:60,
            padding:40,
            paddingTop:20,
            // paddingBottom:20,
            margin:0,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            backgroundColor:'#C0142B',
            
        }
})