import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RiwayatSarat = () => {
  const [formHistory, setFormHistory] = useState([]);

  useEffect(() => {
    getFormHistoryFromStorage();
  }, []);

  const getFormHistoryFromStorage = async () => {
    try {
      const data = await AsyncStorage.getItem('formHistory');
      if (data) {
        const parsedData = JSON.parse(data);
        setFormHistory(parsedData);
      }
    } catch (error) {
      console.error('Error getting form history:', error);
    }
  };

  const handleDeleteHistory = async () => {
    try {
      await AsyncStorage.removeItem('formHistory');
      setFormHistory([]);
      Alert.alert('Riwayat berhasil dihapus');
    } catch (error) {
      console.error('Error deleting form history:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.riwayatSaratItem}>
      <Text style={styles.title}>{item.formData.title}</Text>
      <Text style={styles.date}>Tanggal: {new Date(item.date).toDateString()}</Text>
      {/* Tampilkan data form lainnya di sini */}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Riwayat Sarat</Text>
      {formHistory.length > 0 ? (
        <FlatList
          data={formHistory}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.flatListContent}
        />
      ) : (
        <Text style={styles.emptyText}>Tidak ada riwayat.</Text>
      )}
      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteHistory}>
        <Text style={styles.deleteButtonText}>Hapus Riwayat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
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
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  deleteButton: {
    backgroundColor: '#F16877',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RiwayatSarat;
