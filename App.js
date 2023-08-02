import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import Login from './App/Pages/Login';
import { AuthContext } from './App/Context/AuthContext';
import { useEffect, useState } from 'react';
import SplashScreen from './SplashScreen';
import Home from './App/Pages/Home';
import Services from './App/Shared/Services';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './App/Navigations/HomeNavigation';


export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [userData,setUserData]=useState();
  

  useEffect(()=>{
    const loadingDuration = 3000;

    // Gunakan setTimeout untuk mensimulasikan proses loading
    setTimeout(() => {
      setLoading(false);
    }, loadingDuration);

    Services.getUserAuth().then(resp=>{
      console.log(resp); 
      if(resp)
      {
        setUserData(resp)
      }
      else{
        setUserData(null)
      }
    })
  },[]) 

  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <View style={styles.container}>
      
      <AuthContext.Provider value={{ userData, setUserData }}>
        <NavigationContainer>
          {userData ? <HomeNavigation /> : <Login />}
        </NavigationContainer>
      </AuthContext.Provider>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F6F8FC',
    
  },
});
