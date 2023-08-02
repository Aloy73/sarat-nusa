import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../Shared/Colors';

const hasilSaratData = [
  { id: '1', title: 'Hasil Sarat 1', date: '25 July 2023', message: 'Anda telah berhasil menyelesaikan ujian sarat.' },
  { id: '2', title: 'Hasil Sarat 2', date: '22 July 2023', message: 'Tugas sarat telah diverifikasi dan diterima.' },
  { id: '3', title: 'Hasil Sarat 3', date: '19 July 2023', message: 'Ujian sarat akan segera dimulai pada tanggal 25 July.' },
  // Tambahkan hasil sarat lainnya sesuai kebutuhan
];

const RiwayatSarat = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.hasilSaratItem} onPress={() => handleResultPress(item)}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.message}>{item.message}</Text>
    </TouchableOpacity>
  );

  const handleResultPress = (item) => {
    // Tambahkan navigasi atau logika lain yang sesuai ketika card di tekan
    console.log('Card "' + item.title + '" ditekan!');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={hasilSaratData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  hasilSaratItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.gold, // Warna judul
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
  message: {
    fontSize: 14,
    color: '#333',
    marginTop: 12,
  },
  flatListContent: {
    paddingTop: 12,
  },
});

export default RiwayatSarat;
