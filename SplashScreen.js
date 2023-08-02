import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';

const SplashScreen = () => {
  const [isLoading, setLoading] = useState(true);

  // Menggunakan useEffect untuk mensimulasikan proses loading selama beberapa detik
  useEffect(() => {
    // Gantil angka di bawah ini dengan durasi loading yang Anda inginkan (dalam milidetik)
    const loadingDuration = 3000;

    // Simulasi proses loading selama beberapa detik
    setTimeout(() => {
      setLoading(false);
    }, loadingDuration);
  }, []);

  // Jika isLoading true, tampilkan tampilan loading
  if (isLoading) {
    return (
      <View style={styles.container}>
        <Image
          source={require('./App/Assets/Images/logoSAIM.png')} // Ganti path sesuai dengan lokasi logo aplikasi Anda
          style={styles.logo}
        />
        <ActivityIndicator size="large" color="#FFF" />
      </View>
    );
  }

  // Jika isLoading false, tampilkan tampilan selanjutnya setelah loading selesai
  // Misalnya, Anda dapat mengarahkan pengguna ke halaman berikutnya di sini
  // return <YourNextScreen />;

  // Atau jika Anda hanya ingin menunggu beberapa saat sebelum mengarahkan pengguna ke halaman berikutnya
  // Anda dapat menggunakan useEffect untuk mengalihkan pengguna setelah beberapa detik
  // Contoh:
  // useEffect(() => {
  //   const redirectDuration = 1000;
  //   setTimeout(() => {
  //     navigation.replace('YourNextScreen');
  //   }, redirectDuration);
  // }, []);

  return (
    <View style={styles.container}>
      <Text>SplashScreen Completed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F16877', 
  },
  logo: {
    width: 180, // Ganti dengan ukuran lebar logo yang sesuai
    height: 180, // Ganti dengan ukuran tinggi logo yang sesuai
    marginBottom: 20,
  },
});

export default SplashScreen;
