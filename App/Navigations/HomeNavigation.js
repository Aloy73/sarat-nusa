import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home';
import CourseDetails from '../Pages/CourseDetails';
import CourseChapter from '../Pages/CourseChapter';
import PlayVideo from '../Pages/PlayVideo';
import Submit from '../Pages/Submit';
import Ujian from '../Pages/Ujian';
import Riwayat from '../Pages/Riwayat';
import Hasil from '../Pages/Hasil';
import Notif from '../Pages/Notif';
import Login from '../Pages/Login';
import Profile from '../Pages/Profile';
import { FontAwesome5 } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="tab1" component={Tab1} ></Stack.Screen>
        <Stack.Screen name="home" component={Home} ></Stack.Screen>
        <Stack.Screen name="course-detail" component={CourseDetails} ></Stack.Screen>
        <Stack.Screen name="course-chapter"
        component={CourseChapter}/>
         <Stack.Screen name="play-video"
        component={PlayVideo}/>
        {/* Screen Card */}
        <Stack.Screen name="Submit" component={Submit}></Stack.Screen>
        <Stack.Screen name="Ujian" component={Ujian}></Stack.Screen>
        <Stack.Screen name="Riwayat" component={Riwayat}></Stack.Screen>
        <Stack.Screen name="Hasil" component={Hasil}></Stack.Screen>
        <Stack.Screen name="Notif" component={Notif}></Stack.Screen>
        
    </Stack.Navigator>
    
  )
}

export function Tab1() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#FFFFFF' }, // Ubah warna latar belakang tab sesuai kebutuhan
      }}
      activeColor="#F16877" // Ubah warna teks dan ikon tab aktif sesuai kebutuhan
      inactiveColor="#9e9e9e" // Ubah warna teks dan ikon tab tidak aktif sesuai kebutuhan
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home', // Ubah label tab sesuai kebutuhan
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={20} color={color} />
          ), // Ganti ikon tab sesuai kebutuhan (gunakan ikon dari FontAwesome atau ikon lain yang Anda inginkan)
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile', // Ubah label tab sesuai kebutuhan
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={20} color={color} />
          ), // Ganti ikon tab sesuai kebutuhan (gunakan ikon dari FontAwesome atau ikon lain yang Anda inginkan)
        }}
      />
      <Tab.Screen
        name="Keluar"
        component={Login}
        options={{
          tabBarLabel: 'Logout', // Ubah label tab sesuai kebutuhan
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="sign-out-alt" size={20} color={color} />
          ), // Ganti ikon tab sesuai kebutuhan (gunakan ikon dari FontAwesome atau ikon lain yang Anda inginkan)
        }}
      />
    </Tab.Navigator>
  );
}