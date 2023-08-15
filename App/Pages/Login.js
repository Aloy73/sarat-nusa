import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { AuthContext } from '../Context/AuthContext';
import Colors from '../Shared/Colors';
import axios from 'axios';

// Tambahkan import untuk ikon mata di sini
import { FontAwesome } from '@expo/vector-icons'; // Ubah dengan pustaka ikon yang sesuai

export default function Login() {
  const apiKey ='59927e4dffe0be25f937';
  const { setUserData } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State untuk menyimpan status password terlihat/sembunyi

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        Alert.alert('Error', 'Harap masukkan email dan password.');
        return;
      }
      const user = await loginUserFromBackend(email, password);
      setUserData(user);
    } catch (error) {
      console.log("Login error:", error);
      Alert.alert('Error', 'Login gagal. Silakan coba lagi nanti.');
    }
  };

  const loginUserFromBackend = async (email, password) => {
    const response = await axios.post(
      `https://nusa-api.nuncorp.id/api/v1/user/login?apiKey=${apiKey}`,
      { email, password }
    );
    return response.data;
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./../Assets/Images/logoSAIM.png')}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        onChangeText={(text) => setEmail(text)}
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry={!showPassword}
          onChangeText={(text) => setPassword(text)}
          value={password}
          autoCapitalize="none"
        />
        {/* Tambahkan ikon mata yang berubah sesuai dengan status showPassword */}
        <TouchableOpacity onPress={toggleShowPassword} style={styles.passwordIcon}>
          <FontAwesome name={showPassword ? 'eye-slash' : 'eye'} size={20} color="#999" />
        </TouchableOpacity>
      </View>
      <Text style={styles.forgotPassword}>Lupa Password</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Masuk</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          setUserData({
            name: 'John Doe',
            picture:
              'https://cdn3d.iconscout.com/3d/premium/thumb/male-customer-call-service-portrait-6760890-5600697.png?f=webp',
            class: 'Users@users.com',
            id: 1,
          })
        }
      >
        <Text style={styles.skipButton}>Lewati</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    marginTop: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 50,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#cccccc',
    marginTop: 30,
    marginLeft: 60,
    marginRight: 60,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: '#FFF6F6',
  },
  forgotPassword: {
    marginTop: 12,
    marginLeft: 220,
  },
  button: {
    backgroundColor: '#F16877',
    padding: 10,
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 140,
    marginRight: 140,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 20,
  },
  skipButton: {
    textAlign: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cccccc',
    marginTop: 30,
    marginLeft: 60,
    marginRight: 60,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: '#FFF6F6',
  },
  passwordInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#000',
    paddingRight: 30, 
  },
  passwordIcon: {
    position: 'absolute',
    right: 10,
  },
});
