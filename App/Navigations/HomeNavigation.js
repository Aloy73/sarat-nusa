import { View, Text, TouchableOpacity } from 'react-native'
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
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="tab1" component={Tab1} ></Stack.Screen>
      <Stack.Screen name="home" component={Home} ></Stack.Screen>
      <Stack.Screen name="course-detail" component={CourseDetails} ></Stack.Screen>
      <Stack.Screen name="course-chapter"
        component={CourseChapter} />
      <Stack.Screen name="play-video"
        component={PlayVideo} />
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

      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={({ route }) => ({
          tabBarLabel: ({ focused }) => (
            <TabLabel label="Home" iconName="home" isFocused={focused} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabIcon iconName="home" isFocused={focused} />
          ),
        })}
      />
   
      <Tab.Screen
        name="Logout"
        component={Login}
        options={({ route }) => ({
          tabBarLabel: ({ focused }) => (
            <TabLabel label="Logout" iconName="sign-out-alt" isFocused={focused} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabIcon iconName="sign-out-alt" isFocused={focused} />
          ),
        })}
      />
    </Tab.Navigator>
  );
}

const TabIcon = ({ iconName, isFocused }) => {
  const iconColor = isFocused ? '#FFFFFF' : '#9e9e9e';
  const backgroundColor = isFocused ? '#F16877' : 'transparent';

  return (
    <View style={[styles.tabIconContainer, { backgroundColor }]}>
      <FontAwesome5 name={iconName} size={20} color={iconColor} />
    </View>
  );
};

const TabLabel = ({ label, isFocused }) => {
  const textColor = isFocused ? '#F16877' : '#9e9e9e';

  return (
    <View style={styles.tabLabelContainer}>
      {/* <FontAwesome5 name={iconName} size={20} color={textColor} /> */}
      <Text style={[styles.tabLabelText, { color: textColor }]}>{label}</Text>
    </View>
  );
};

const styles = {
  tabIconContainer: {
    marginBottom: 10,
    marginTop: 20,
    width: 70,
    height: 70,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabLabelContainer: {
    alignItems: 'center',
  },
  tabLabelText: {
    fontSize: 12,
    marginTop: 8,
    marginBottom: 10,

  },
};