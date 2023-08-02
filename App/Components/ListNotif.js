import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const contacts = [
  { id: 1, name: 'Uang Seragam', phone: 'Batas Pembayaran 06-12-23', status:'Belum Lunas' },
  { id: 2, name: 'Matematika', phone: 'Batas Pengumpulan 06-12-23', status:'Belum Selesai'},
  { id: 3, name: 'Hafalan Orang Tua', phone: 'Batas Pengumpulan 06-12-23', status:'Belum Selesai'},
  { id: 4, name: 'Uang SPP', phone: 'Batas Pembayaran 06-12-23', status:'Belum Lunas'},
 
  // Tambahkan kontak lain di sini
];

export default function () {
  const renderItem = ({ item }) => (
    <View style={styles.contactItem}>
      <Text style={styles.contactName}>{item.name}</Text>
      <Text style={styles.contactPhone}>{item.phone}</Text>
      <Text style={styles.contactStatus}>{item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  contactItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactPhone: {
    fontSize: 16,
    color: '#666666',
  },
  contactStatus: {
    fontSize: 16,
    color: '#666666',
    paddingLeft:250,
  
  },
});


