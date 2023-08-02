import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Colors from '../Shared/Colors'
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { TouchableOpacity } from 'react-native';
import { AuthContext } from '../Context/AuthContext';
import Services from '../Shared/Services';
import HeaderProfile from '../Components/HeaderProfile'

export default function Profile() {
  WebBrowser.maybeCompleteAuthSession();
  const [accessToken, setAccessToken] = useState();
  const [userInfo, setUserInfo] = useState();
  const { userData, setUserData } = useContext(AuthContext)
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '55959786226-e9frfu2d60hu3lt653blch82e4rhjsnp.apps.googleusercontent.com',
    expoClientId: '55959786226-llk648p590tvtaoklnv4o89mtjtenecr.apps.googleusercontent.com'

  });

  useEffect(() => {
    if (response?.type == 'success') {
      setAccessToken(response.authentication.accessToken);

      getUserData();
    }
  }, [response]);

  const getUserData = async () => {
    try {
      const resp = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${response.authentication.accessToken}` },
        }
      );

      const user = await resp.json();
      console.log("user Details", user)
      setUserInfo(user);
      setUserData(user);
      await Services.setUserAuth(user);
    } catch (error) {
      // Add your own error handler here
    }
  }
  return (
    <View>
        <HeaderProfile/>
      <View style={styles.container}>
        <Image style={{
          alignContent: 'center',
          marginTop: -5, marginLeft: 130, marginBottom: 50
        }} source={require('./../Assets/Images/Profile.png')} />

        
        <TextInput
            style={styles.input}
            placeholder="Nama Lengkap"
            onChangeText={(text) => setNamaLengkap(text)}
            
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            
          /><TextInput
          style={styles.input}
          placeholder="No Hp"
          onChangeText={(number) => setNoHp(number)}
          
        />
          
        <TouchableOpacity style={styles.button}
          onPress={() => promptAsync()}>
          

          <Text style={{ color: Colors.white, fontSize: 14 }}>Perbarui</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setUserData({
          name: 'Rahul Sanap',
          picture: 'https://cdn3d.iconscout.com/3d/premium/thumb/male-customer-call-service-portrait-6760890-5600697.png?f=webp',
          email: 'rahul@gmail.com',
          id: 1
        })}>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    marginTop: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30
  },
  welcomeText: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#cccccc',
    marginTop:30,
    marginLeft:60,
    marginRight:60,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor:'#FFE4EA'
  },
  button: {
    backgroundColor: '#F16877',
    padding: 10,
    marginTop:30,
    marginBottom:20,
    marginLeft:140,
    marginRight:140,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  }

})