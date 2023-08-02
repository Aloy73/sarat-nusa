import { View, Text, Image, StyleSheet,  TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigation } from '@react-navigation/native';
import Colors from '../Shared/Colors'


export default function WelcomeHeader() {
  const { userData, setUserData } = useContext(AuthContext)
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <View>
        <Image source={require('./../Assets/Images/Profile.png')}
          style={{ width: 50, height: 50, borderRadius: 100, marginTop: 25 }}
        />
        <Text style={{ marginLeft: 60, marginTop: -50 }}>Assalamualaikum</Text>
        <Text style={{ marginLeft: 60, fontSize: 20, fontWeight: 'bold' }}>{"Dummy Users"}</Text>
        <Text style={{ marginLeft: 60 }}>{userData ? userData.class : 'Please Login'}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Notif')} >
          <Image source={require('./../Assets/Images/Notif.png')}
            style={{ width: 30, height: 30, marginLeft: 270, marginTop: -45 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    padding: 40,
    paddingTop: 40,
    margin: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#C0142B',

  }
})