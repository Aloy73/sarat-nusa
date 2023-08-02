import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Colors from '../Shared/Colors';

const data = [
  { id: '1', description: 'Submit Sarat', icon: require('./../Assets/Images/undraw_Publish_article_re_3x8h.png'), screenName: 'Submit' },
  { id: '2', description: 'Ujian Sarat', icon: require('./../Assets/Images/undraw_Note_list_re_r4u9.png'), screenName: 'Ujian' },
  { id: '3', description: 'Riwayat Sarat', icon: require('./../Assets/Images/undraw_Forms_re_pkrt.png'), screenName: 'Riwayat' },
  { id: '4', description: 'Hasil Sarat', icon: require('./../Assets/Images/undraw_creative_experiment_8dk3.png'), screenName: 'Hasil' },
];

const Menu = () => {
  const navigation = useNavigation();
  const renderCardItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.screenName)} style={styles.cardContainer}>
      <Card style={styles.card}>
        <Image source={item.icon} style={styles.icon} />
        <Text style={styles.description}>{item.description}</Text>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderCardItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Mengubah jumlah kolom menjadi 2
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
  },
  flatListContent: {
    justifyContent: 'space-between',
    paddingBottom: 10, // Tambahkan padding di bagian bawah FlatList
  },
  cardContainer: {
    flex: 1,
    margin: 10,
  },
  card: {
    height: 120, // Tinggi card menjadi lebih tinggi
    width: '100%', // Lebar card menyesuaikan 2 kolom
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Background card putih
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    width: 60, // Lebar ikon menjadi lebih kecil
    height: 70, // Tinggi ikon menjadi lebih kecil
    marginBottom: 8,
    marginLeft:13,
    
  },
  description: {
    fontSize: 14, // Ukuran teks menjadi lebih besar
    color: Colors.black,
    textAlign: 'center', // Teks berada di tengah card
  },
});

export default Menu;
