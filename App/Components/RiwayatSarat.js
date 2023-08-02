import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const riwayatSaratData = [
    { id: '1', title: 'Riwayat Sarat 1', date: '25 July 2023', description: 'Deskripsi riwayat sarat 1.' },
    { id: '2', title: 'Riwayat Sarat 2', date: '22 July 2023', description: 'Deskripsi riwayat sarat 2.' },
    { id: '3', title: 'Riwayat Sarat 3', date: '19 July 2023', description: 'Deskripsi riwayat sarat 3.' },
  // Tambahkan riwayat sarat lainnya sesuai kebutuhan
];

const RiwayatSarat = () => {
  const renderItem = ({ item }) => (
    <View style={styles.riwayatSaratItem}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={riwayatSaratData}
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
      riwayatSaratItem: {
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
        marginBottom: 8,
      },
      date: {
        fontSize: 14,
        color: '#888',
      },
      description: {
        fontSize: 14,
        color: '#333',
        marginTop: 8,
      },
      flatListContent: {
        paddingTop: 12,
      },
});

export default RiwayatSarat;
