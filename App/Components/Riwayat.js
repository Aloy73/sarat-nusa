import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigation } from '@react-navigation/native';
import Colors from '../Shared/Colors'


export default function Riwayat() {
  const navigation = useNavigation();
  const { userData, setUserData } = useContext(AuthContext)
  return (
    <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <Image source={require('./../Assets/Images/panah.png')}
              style={{ width: 20, height: 20, borderRadius: 100, marginTop: 30 }}
            />
          </TouchableOpacity>
          <Text style={{ marginLeft: 95, marginTop: -20, fontSize: 20, fontWeight: 'bold' }}>Riwayat Sarat</Text>
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
    paddingTop: 20,
    margin: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#C0142B',
  },
  image: {
    width: 100,
    height: 20,
  }
})