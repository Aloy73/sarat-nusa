
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';
// import * as DocumentPicker from 'expo-document-picker';
// import { RadioButton } from 'react-native-paper';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Colors from '../Shared/Colors';

// const FormInput = () => {
//   const [selectedOption, setSelectedOption] = useState('option1');
//   const [selectedOptionTwo, setSelectedOptionTwo] = useState('option1');
//   const [selectedOptionThree, setSelectedOptionThree] = useState('option1');
//   const [name, setName] = useState('');
//   const [namaOrtu, setOrtu] = useState('');
//   const [noWa, setNoWa] = useState('');
//   const [alasan, setAlasan] = useState('');
//   const [message, setMessage] = useState('');
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [isStartTimePickerVisible, setStartTimePickerVisibility] = useState(false);
//   const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false);
//   const [startTime, setStartTime] = useState(null);
//   const [endTime, setEndTime] = useState(null);
//   const [isModalVisible, setModalVisible] = useState(false);


//   const handleOpenStartTimePicker = () => {
//     setStartTimePickerVisibility(true);
//   };

//   const handleOpenEndTimePicker = () => {
//     setEndTimePickerVisibility(true);
//   };

//   const handleConfirmStartTime = (time) => {
//     setStartTimePickerVisibility(false);
//     const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     setStartTime(formattedTime);
//   };

//   const handleConfirmEndTime = (time) => {
//     setEndTimePickerVisibility(false);
//     const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     setEndTime(formattedTime);
//   };

//   const handleCancelTimePicker = () => {
//     setStartTimePickerVisibility(false);
//     setEndTimePickerVisibility(false);
//   };

//   const handleSelectFile = async () => {
//     try {
//       const result = await DocumentPicker.getDocumentAsync({ type: '*/*' });

//       if (result.type === 'success') {
//         setSelectedFile(result);
//       }
//     } catch (error) {
//       console.log('Error in selecting file:', error);
//     }
//   };

//   const toggleModal = () => {
//     setModalVisible(true);
//   };
//   const handleSendMessage = async () => {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           selectedOption,
//           selectedOptionTwo,
//           selectedOptionThree,
//           name,
//           namaOrtu,
//           noWa,
//           alasan,
//           message,
//           selectedFile,
//           isStartTimePickerVisible,
//           isEndTimePickerVisible,
//           startTime,
//           endTime,

//         }),
//       });
//       const data = await response.json();
//       console.log('Response from API, API id:', data);

//       const riwayatItem = {
//         title: `Resume SARAT - ${selectedOption}`,
//         date: new Date().toLocaleDateString(),
//       };

//       const existingRiwayat = await AsyncStorage.getItem('riwayatData');
//       const updatedRiwayat = existingRiwayat
//         ? [...JSON.parse(existingRiwayat), riwayatItem]
//         : [riwayatItem];

//       await AsyncStorage.setItem('riwayatData', JSON.stringify(updatedRiwayat));

//       setName('');
//       setOrtu('');
//       setNoWa('');
//       setAlasan('');
//       setMessage('');
//       setSelectedFile(null);
//       setStartTime(null);
//       setEndTime(null);
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   };



//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Resume SARAT T.A. 2022/2023</Text>
//       <Text style={styles.label}>Sesi</Text>
//       <View style={styles.radioButtonContainer}>
//         <View style={styles.radioButtonItem}>
//           <RadioButton
//             value="option1"
//             status={selectedOption === 'option1' ? 'checked' : 'unchecked'}
//             onPress={() => setSelectedOption('option1')}
//             color="#F16877"
//             uncheckedColor="#F16877"
//             borderColor="#F16877"
//             borderWidth={0.5}
//           />
//           <Text style={styles.radioButtonLabel}>Sesi 01: Ihsan dalam Ta'dib | Dr. Wido Supraha, M.Si.</Text>
//         </View>

//         <View style={styles.radioButtonItem}>
//           <RadioButton
//             value="option2"
//             status={selectedOption === 'option2' ? 'checked' : 'unchecked'}
//             onPress={() => setSelectedOption('option2')}
//             color="#F16877"
//             uncheckedColor="#F16877"
//             borderColor="#F16877"
//             borderWidth={0.5}
//           />
//           <Text style={styles.radioButtonLabel}>Sesi 02: Konsep Nabi Mendidik Anak | Dr. Wido Supraha, M.Si.</Text>
//         </View>
//         <View style={styles.radioButtonItem}>
//           <RadioButton
//             value="option3"
//             status={selectedOption === 'option3' ? 'checked' : 'unchecked'}
//             onPress={() => setSelectedOption('option3')}
//             color="#F16877"
//             uncheckedColor="#F16877"
//             borderColor="#F16877"
//             borderWidth={0.5}
//           />
//           <Text style={styles.radioButtonLabel}>Sesi 03: Metode Nabi Mendidik Anak | Dr. Wido Supraha, M.Si</Text>
//         </View>
//         <View style={styles.radioButtonItem}>
//           <RadioButton
//             value="option4"
//             status={selectedOption === 'option4' ? 'checked' : 'unchecked'}
//             onPress={() => setSelectedOption('option4')}
//             color="#F16877"
//             uncheckedColor="#F16877"
//             borderColor="#F16877"
//             borderWidth={0.5}
//           />
//           <Text style={styles.radioButtonLabel}>Sesi 04: Imtihan</Text>
//         </View>
//         <View style={styles.radioButtonItem}>
//           <RadioButton
//             value="option5"
//             status={selectedOption === 'option5' ? 'checked' : 'unchecked'}
//             onPress={() => setSelectedOption('option5')}
//             color="#F16877"
//             uncheckedColor="#F16877"
//             borderColor="#F16877"
//             borderWidth={0.5}
//           />
//           <Text style={styles.radioButtonLabel}>Sesi 05: Tips Mendidik Anak Melalui Pola Komunikasi Sehat | Dr. Wido Supraha, M.Si.</Text>
//         </View>
//         <View style={styles.radioButtonItem}>
//           <RadioButton
//             value="option6"
//             status={selectedOption === 'option6' ? 'checked' : 'unchecked'}
//             onPress={() => setSelectedOption('option6')}
//             color="#F16877"
//             uncheckedColor="#F16877"
//             borderColor="#F16877"
//             borderWidth={0.5}
//           />
//           <Text style={styles.radioButtonLabel}>Sesi 06: Jambore Keluarga Qur'an VI</Text>
//         </View>
//         <View style={styles.radioButtonItem}>
//           <RadioButton
//             value="option7"
//             status={selectedOption === 'option7' ? 'checked' : 'unchecked'}
//             onPress={() => setSelectedOption('option7')}
//             color="#F16877"
//             uncheckedColor="#F16877"
//             borderColor="#F16877"
//             borderWidth={0.5}
//           />
//           <Text style={styles.radioButtonLabel}>Sesi 07: Mewaspadai Gadget | Kak Sinyo</Text>
//         </View>
//         <View style={styles.radioButtonItem}>
//           <RadioButton
//             value="option8"
//             status={selectedOption === 'option8' ? 'checked' : 'unchecked'}
//             onPress={() => setSelectedOption('option8')}
//             color="#F16877"
//             uncheckedColor="#F16877"
//             borderColor="#F16877"
//             borderWidth={0.5}
//           />
//           <Text style={styles.radioButtonLabel}>Sesi 08: Tips Mendidik Anak Laki-laki | Dr. Wido Supraha, M.Si.</Text>
//         </View>
//         <View style={styles.radioButtonItem}>
//           <RadioButton
//             value="option9"
//             status={selectedOption === 'option9' ? 'checked' : 'unchecked'}
//             onPress={() => setSelectedOption('option9')}
//             color="#F16877"
//             uncheckedColor="#F16877"
//             borderColor="#F16877"
//             borderWidth={0.5}
//           />
//           <Text style={styles.radioButtonLabel}>Sesi 09: Membangun Cinta Literasi Pada Anak | Dr. Wido Supraha, M.Si.</Text>
//         </View>
//         <View style={styles.radioButtonItem}>
//           <RadioButton
//             value="option10"
//             status={selectedOption === 'option10' ? 'checked' : 'unchecked'}
//             onPress={() => setSelectedOption('option10')}
//             color="#F16877"
//             uncheckedColor="#F16877"
//             borderColor="#F16877"
//             borderWidth={0.5}
//           />
//           <Text style={styles.radioButtonLabel}>Sesi 10: Tips Dialog Mudah Dengan Anak | Dr. Wido Supraha, M.Si.</Text>
//         </View>
//         <View style={styles.radioButtonItem}>
//           <RadioButton
//             value="option11"
//             status={selectedOption === 'option11' ? 'checked' : 'unchecked'}
//             onPress={() => setSelectedOption('option11')}
//             color="#F16877"
//             uncheckedColor="#F16877"
//             borderColor="#F16877"
//             borderWidth={0.5}
//           />
//           <Text style={styles.radioButtonLabel}>Sesi 11: Problem dan Solusi Pendidikan Anak | Dr. Wido Supraha, M.Si.</Text>
//         </View>
//       </View>
//       <Text style={styles.label}>Posisi Rumah Tangga</Text>
//       <View style={styles.radioButtonContainer}>
//         <View style={styles.radioButtonItem}>
//           <RadioButton
//             value="option1"
//             status={selectedOptionTwo === 'option1' ? 'checked' : 'unchecked'}
//             onPress={() => setSelectedOptionTwo('option1')}
//             color="#F16877"
//             uncheckedColor="#F16877"
//             borderColor="#F16877"
//             borderWidth={0.5}
//           />
//           <Text style={styles.radioButtonLabel}>Ayah</Text>
//         </View>

//         <View style={styles.radioButtonItem}>
//           <RadioButton
//             value="option2"
//             status={selectedOptionTwo === 'option2' ? 'checked' : 'unchecked'}
//             onPress={() => setSelectedOptionTwo('option2')}
//             color="#F16877"
//             uncheckedColor="#F16877"
//             borderColor="#F16877"
//             borderWidth={0.5}
//           />
//           <Text style={styles.radioButtonLabel}>Bunda</Text>
//         </View>

//       </View>
//       <Text style={styles.label}>Nama Lengkap Ananda:</Text>
//       <TextInput
//         style={styles.input}
//         value={name}
//         onChangeText={(text) => setName(text)}
//         placeholder="Nama Lengkap"
//       />
//       <Text style={styles.label}>Kelas Ananda (Diisi khusus bagi Wali Murid SAIM)</Text>
//       <View style={styles.radioButtonContainer}>
//         <View style={styles.radioButtonItem}>
//           <RadioButton
//             value="option1"
//             status={selectedOptionThree === 'option1' ? 'checked' : 'unchecked'}
//             onPress={() => setSelectedOptionThree('option1')}
//             color="#F16877"
//             uncheckedColor="#F16877"
//             borderColor="#F16877"
//             borderWidth={0.5}
//           />
//           <Text style={styles.radioButtonLabel}>Kelas 1A</Text>
//         </View>

//         <View style={styles.radioButtonItem}>
//           <RadioButton
//             value="option2"
//             status={selectedOptionThree === 'option2' ? 'checked' : 'unchecked'}
//             onPress={() => setSelectedOptionThree('option2')}
//             color="#F16877"
//             uncheckedColor="#F16877"
//             borderColor="#F16877"
//             borderWidth={0.5}
//           />
//           <Text style={styles.radioButtonLabel}>Kelas 1B</Text>
//         </View>
//         <View style={styles.radioButtonItem}>
//           <RadioButton
//             value="option3"
//             status={selectedOptionThree === 'option3' ? 'checked' : 'unchecked'}
//             onPress={() => setSelectedOptionThree('option3')}
//             color="#F16877"
//             uncheckedColor="#F16877"
//             borderColor="#F16877"
//             borderWidth={0.5}
//           />
//           <Text style={styles.radioButtonLabel}>Kelas 2A</Text>
//         </View>
//         <View style={styles.radioButtonItem}>
//           <RadioButton
//             value="option4"
//             status={selectedOptionThree === 'option4' ? 'checked' : 'unchecked'}
//             onPress={() => setSelectedOptionThree('option4')}
//             color="#F16877"
//             uncheckedColor="#F16877"
//             borderColor="#F16877"
//             borderWidth={0.5}
//           />
//           <Text style={styles.radioButtonLabel}>Kelas 2B</Text>
//         </View>
//         <View style={styles.radioButtonItem}>
//           <RadioButton
//             value="option5"
//             status={selectedOptionThree === 'option5' ? 'checked' : 'unchecked'}
//             onPress={() => setSelectedOptionThree('option5')}
//             color="#F16877"
//             uncheckedColor="#F16877"
//             borderColor="#F16877"
//             borderWidth={0.5}
//           />
//           <Text style={styles.radioButtonLabel}>Kelas 3A</Text>
//         </View>
//         <View style={styles.radioButtonItem}>
//           <RadioButton
//             value="option6"
//             status={selectedOptionThree === 'option6' ? 'checked' : 'unchecked'}
//             onPress={() => setSelectedOptionThree('option6')}
//             color="#F16877"
//             uncheckedColor="#F16877"
//             borderColor="#F16877"
//             borderWidth={0.5}
//           />
//           <Text style={styles.radioButtonLabel}>Kelas 3B</Text>
//         </View>
//         <View style={styles.radioButtonItem}>
//           <RadioButton
//             value="option7"
//             status={selectedOptionThree === 'option7' ? 'checked' : 'unchecked'}
//             onPress={() => setSelectedOptionThree('option7')}
//             color="#F16877"
//             uncheckedColor="#F16877"
//             borderColor="#F16877"
//             borderWidth={0.5}
//           />
//           <Text style={styles.radioButtonLabel}>Kelas 4A</Text>
//         </View>
//         <View style={styles.radioButtonItem}>
//           <RadioButton
//             value="option8"
//             status={selectedOptionThree === 'option8' ? 'checked' : 'unchecked'}
//             onPress={() => setSelectedOptionThree('option8')}
//             color="#F16877"
//             uncheckedColor="#F16877"
//             borderColor="#F16877"
//             borderWidth={0.5}
//           />
//           <Text style={styles.radioButtonLabel}>Kelas 4B</Text>
//         </View>
//         <View style={styles.radioButtonItem}>
//           <RadioButton
//             value="option9"
//             status={selectedOptionThree === 'option9' ? 'checked' : 'unchecked'}
//             onPress={() => setSelectedOptionThree('option9')}
//             color="#F16877"
//             uncheckedColor="#F16877"
//             borderColor="#F16877"
//             borderWidth={0.5}
//           />
//           <Text style={styles.radioButtonLabel}>Kelas Akselerasi</Text>
//         </View>


//       </View>
//       <Text style={styles.label}>Nama Lengkap Ayah/Bunda | Contoh: Dr. H. Abdurrahman, M.Si. (perhatikan spasi, titik koma, huruf besar dan kecilnya):</Text>
//       <TextInput
//         style={styles.input}
//         value={namaOrtu}
//         onChangeText={(text) => setOrtu(text)}
//         placeholder="Nama Lengkap Ayah/Bunda"
//         keyboardType="nama-Ayah/Bunda"
//       />
//       <Text style={styles.label}>Nomor Whatsapp | Contoh: '+628123456789 (perhatikan formatnya dan diawali tandi petik satu)</Text>
//       <TextInput
//         style={styles.input}
//         value={noWa}
//         onChangeText={(text) => setNoWa(text)}
//         placeholder="Nomor Whatsapp"
//         keyboardType="nomor-whatsapp"
//       />
//       <Text style={styles.label}>Jam Kehadiran</Text>
//       <TouchableOpacity
//         style={styles.timeButton}
//         onPress={handleOpenStartTimePicker}
//       >
//         <FontAwesome name="clock-o" size={24} color="#F16877" />
//         {startTime ? (
//           <Text style={styles.selectedTime}>{startTime}</Text>
//         ) : (
//           <Text style={styles.buttonText}>Jam Hadir</Text>
//         )}
//       </TouchableOpacity>

//       <Text style={styles.label}>Jam Kepulangan</Text>
//       <TouchableOpacity
//         style={styles.timeButton}
//         onPress={handleOpenEndTimePicker}
//       >
//         <FontAwesome name="clock-o" size={24} color="#F16877" />
//         {endTime ? (
//           <Text style={styles.selectedTime}>{endTime}</Text>
//         ) : (
//           <Text style={styles.buttonText}>Jam Pulang</Text>
//         )}
//       </TouchableOpacity>

//       {isStartTimePickerVisible && (
//         <DateTimePickerModal
//           isVisible={isStartTimePickerVisible}
//           mode="time"
//           onConfirm={handleConfirmStartTime}
//           onCancel={handleCancelTimePicker}
//         />
//       )}

//       {isEndTimePickerVisible && (
//         <DateTimePickerModal
//           isVisible={isEndTimePickerVisible}
//           mode="time"
//           onConfirm={handleConfirmEndTime}
//           onCancel={handleCancelTimePicker}
//         />
//       )}

//       <Text style={styles.label}>Nama Lengkap Ayah/Bunda | Contoh: Dr. H. Abdurrahman, M.Si. (perhatikan spasi, titik koma, huruf besar dan kecilnya):</Text>
//       <TextInput
//         style={styles.input}
//         value={namaOrtu}
//         onChangeText={(text) => setOrtu(text)}
//         placeholder="Nama Lengkap Ayah/Bunda"
//         keyboardType="nama-Ayah/Bunda"
//       />

//       <Text style={styles.label}>Alesan Terlambat ?</Text>
//       <TextInput
//         style={styles.input}
//         value={alasan}
//         onChangeText={(text) => setAlasan(text)}
//         placeholder="Alasan Terlambat"
//         keyboardType="alasan-terlambat"
//       />

//       <View>
//         <Text style={styles.label}>"Silahkan Ayah/Bunda bisa memasukkan catatannya di kolom paragraf atau upload filenya. File bisa hasil ketikan, atau tulisan tangan yang dijepret dengan kamera untuk kemudian diunggah ke link. Boleh pilih yang mana saja yang memudahkan. Lebih kami sarankan dalam bentuk tulisan paragraf saja."</Text>
//       </View>

//       <Text style={{ marginBottom: 5, }} >1. Opsi Pertama, masukkan resume Ayah/Bunda disini dari hasil ketikan di laptop atau ketikan jempol di HP. Resume mengandung hal-hal baru yang didapatkan dari sesi kali ini. Dapat dituliskan poin per poin tanpa dibatasi jumlahnya.</Text>
//       <TextInput
//         style={styles.textarea}
//         value={message}
//         onChangeText={(text) => setMessage(text)}
//         placeholder="Masukkan Pesan"
//         multiline={true}
//         numberOfLines={4}
//       />

//       <Text style={{ marginBottom: 5, }} >2. Opsi kedua, masukkan resume Ayah/Bunda disini jika ingin langsung mengambil foto dari coretannya di atas kertas.</Text>
//       {selectedFile && (
//         <View style={styles.selectedFileContainer}>
//           <FontAwesome name="file" size={24} color="#F16877" />
//           <Text style={styles.selectedFileName}>{selectedFile.name}</Text>
//         </View>
//       )}
//       <TouchableOpacity
//         style={[
//           styles.fileButton,
//           selectedFile ? { borderColor: '#4CAF50' } : { borderColor: '#ccc' },
//         ]}
//         onPress={handleSelectFile}
//       >
//         <FontAwesome
//           name="upload"
//           size={24}
//           color={selectedFile ? '#4CAF50' : '#ccc'}
//         />
//         <Text
//           style={[
//             styles.buttonText,
//             selectedFile ? { color: '#4CAF50' } : { color: '#ccc' },
//           ]}
//         >
//           Pilih Berkas
//         </Text>
//       </TouchableOpacity>


//       <TouchableOpacity style={styles.button} onPress={handleSendMessage}>

//         <Text style={styles.buttonText}>Kirim Pesan</Text>
//       </TouchableOpacity>

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//   },
//   title: {
//     textAlign: 'center',
//     marginTop: 10,
//     fontSize: 18,
//     marginBottom: 6,
//     fontWeight: 'bold',
//   },
//   label: {
//     marginTop: 10,
//     fontSize: 16,
//     marginBottom: 6,
//     fontWeight: 'bold',
//   },
//   input: {
//     height: 40,
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingHorizontal: 8,
//     borderColor: '#F16877',
//   },
//   textarea: {
//     borderWidth: 1,
//     borderColor: '#F16877',
//     marginBottom: 12,
//     paddingHorizontal: 8,
//     paddingTop: 8,
//     textAlignVertical: 'top',
//     height: 120,
//     borderRadius: 5,
//   },
//   fileButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//     marginBottom: 12,

//   },
//   timeButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//     marginBottom: 12,
//     borderColor: '#F16877',
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginLeft: 8,
//     fontColors: Colors.black,
//     borderRadius: 5,
//   },
//   selectedTime: {
//     fontSize: 16,
//     marginLeft: 8,
//   },
//   selectedFileContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 12,
//   },
//   selectedFileName: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginLeft: 8,
//   },
//   radioButtonContainer: {
//     marginBottom: 10,
//   },
//   radioButtonItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//     color: Colors.gold,
//   },
//   radioButtonLabel: {
//     fontSize: 14,
//     marginLeft: 10,
//   },
//   button: {
//     backgroundColor: '#F16877',
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   modalContainer: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   modalText: {
//     fontSize: 18,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   modalButtonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//   },
//   modalButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     minWidth: 100,
//   },
//   modalCancelButton: {
//     backgroundColor: '#F16877',
//   },
//   modalSubmitButton: {
//     backgroundColor: '#4CAF50',
//   },
//   modalButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default FormInput;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { RadioButton } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Colors from '../Shared/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';



const FormInput = () => {
  const [title, SetTitle] = useState('Submit Sarat')
  const [selectedOption, setSelectedOption] = useState('option1');
  const [selectedOptionTwo, setSelectedOptionTwo] = useState('option1');
  const [selectedOptionThree, setSelectedOptionThree] = useState('option1');
  const [name, setName] = useState('');
  const [namaOrtu, setOrtu] = useState('');
  const [noWa, setNoWa] = useState('');
  const [alasan, setAlasan] = useState('');
  const [message, setMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isStartTimePickerVisible, setStartTimePickerVisibility] = useState(false);
  const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const Stack = createStackNavigator();



  const sendFormDataToFakeAPI = async (formData) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      return responseData;
    } catch (error) {
      console.error('Error sending data to Fake API:', error);
      throw error;
    }
  };

  const handleOpenStartTimePicker = () => {
    setStartTimePickerVisibility(true);
  };

  const handleOpenEndTimePicker = () => {
    setEndTimePickerVisibility(true);
  };

  const handleConfirmStartTime = (time) => {
    setStartTimePickerVisibility(false);
    const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setStartTime(formattedTime);
  };

  const handleConfirmEndTime = (time) => {
    setEndTimePickerVisibility(false);
    const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setEndTime(formattedTime);
  };

  const handleCancelTimePicker = () => {
    setStartTimePickerVisibility(false);
    setEndTimePickerVisibility(false);
  };

  const handleSelectFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({ type: '*/*' });

      if (result.type === 'success') {
        setSelectedFile(result);
      }
    } catch (error) {
      console.log('Error in selecting file:', error);
    }
  };

  const handleSendMessage = () => {
    setModalVisible(true);
  };

  const handleConfirmSendMessage = async () => {
    const formData = {
      title,
      selectedOption,
      selectedOptionTwo,
      selectedOptionThree,
      name,
      namaOrtu,
      noWa,
      alasan,
      message,
      selectedFile,
      isStartTimePickerVisible,
      isEndTimePickerVisible,
      startTime,
      endTime,
    };

    try {
      const response = await sendFormDataToFakeAPI(formData);

      if (response.id) {
        console.log("Data berhasil dikirim dengan ID:", response.id);
        await saveFormToStorage(formData);
      } else {
        console.log('Gagal mengirim jawaban');
      }
    } catch (error) {
      console.error('Error handling confirmation:', error);
    }

    setName('');
    setOrtu('');
    setNoWa('');
    setAlasan('');
    setMessage('');
    setSelectedFile(null);
    setStartTime(null);
    setEndTime(null);
    setModalVisible(false);
  };

  const handleCancelSendMessage = () => {
    setModalVisible(false);
  };

  const saveFormToStorage = async (formData) => {
    try {
      const existingData = await AsyncStorage.getItem('formHistory');
      const parsedData = existingData ? JSON.parse(existingData) : [];
      const updatedData = [...parsedData, { formData, date: new Date() }];

      await AsyncStorage.setItem('formHistory', JSON.stringify(updatedData));
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resume SARAT T.A. 2022/2023</Text>
      <Text style={styles.label}>Sesi</Text>
      <View style={styles.radioButtonContainer}>
        <View style={styles.radioButtonItem}>
          <RadioButton
            value="option1"
            status={selectedOption === 'option1' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOption('option1')}
            color="#F16877"
            uncheckedColor="#F16877"
            borderColor="#F16877"
            borderWidth={0.5}
          />
          <Text style={styles.radioButtonLabel}>Sesi 01: Ihsan dalam Ta'dib | Dr. Wido Supraha, M.Si.</Text>
        </View>

        <View style={styles.radioButtonItem}>
          <RadioButton
            value="option2"
            status={selectedOption === 'option2' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOption('option2')}
            color="#F16877"
            uncheckedColor="#F16877"
            borderColor="#F16877"
            borderWidth={0.5}
          />
          <Text style={styles.radioButtonLabel}>Sesi 02: Konsep Nabi Mendidik Anak | Dr. Wido Supraha, M.Si.</Text>
        </View>
        <View style={styles.radioButtonItem}>
          <RadioButton
            value="option3"
            status={selectedOption === 'option3' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOption('option3')}
            color="#F16877"
            uncheckedColor="#F16877"
            borderColor="#F16877"
            borderWidth={0.5}
          />
          <Text style={styles.radioButtonLabel}>Sesi 03: Metode Nabi Mendidik Anak | Dr. Wido Supraha, M.Si</Text>
        </View>
        <View style={styles.radioButtonItem}>
          <RadioButton
            value="option4"
            status={selectedOption === 'option4' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOption('option4')}
            color="#F16877"
            uncheckedColor="#F16877"
            borderColor="#F16877"
            borderWidth={0.5}
          />
          <Text style={styles.radioButtonLabel}>Sesi 04: Imtihan</Text>
        </View>
        <View style={styles.radioButtonItem}>
          <RadioButton
            value="option5"
            status={selectedOption === 'option5' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOption('option5')}
            color="#F16877"
            uncheckedColor="#F16877"
            borderColor="#F16877"
            borderWidth={0.5}
          />
          <Text style={styles.radioButtonLabel}>Sesi 05: Tips Mendidik Anak Melalui Pola Komunikasi Sehat | Dr. Wido Supraha, M.Si.</Text>
        </View>
        <View style={styles.radioButtonItem}>
          <RadioButton
            value="option6"
            status={selectedOption === 'option6' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOption('option6')}
            color="#F16877"
            uncheckedColor="#F16877"
            borderColor="#F16877"
            borderWidth={0.5}
          />
          <Text style={styles.radioButtonLabel}>Sesi 06: Jambore Keluarga Qur'an VI</Text>
        </View>
        <View style={styles.radioButtonItem}>
          <RadioButton
            value="option7"
            status={selectedOption === 'option7' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOption('option7')}
            color="#F16877"
            uncheckedColor="#F16877"
            borderColor="#F16877"
            borderWidth={0.5}
          />
          <Text style={styles.radioButtonLabel}>Sesi 07: Mewaspadai Gadget | Kak Sinyo</Text>
        </View>
        <View style={styles.radioButtonItem}>
          <RadioButton
            value="option8"
            status={selectedOption === 'option8' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOption('option8')}
            color="#F16877"
            uncheckedColor="#F16877"
            borderColor="#F16877"
            borderWidth={0.5}
          />
          <Text style={styles.radioButtonLabel}>Sesi 08: Tips Mendidik Anak Laki-laki | Dr. Wido Supraha, M.Si.</Text>
        </View>
        <View style={styles.radioButtonItem}>
          <RadioButton
            value="option9"
            status={selectedOption === 'option9' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOption('option9')}
            color="#F16877"
            uncheckedColor="#F16877"
            borderColor="#F16877"
            borderWidth={0.5}
          />
          <Text style={styles.radioButtonLabel}>Sesi 09: Membangun Cinta Literasi Pada Anak | Dr. Wido Supraha, M.Si.</Text>
        </View>
        <View style={styles.radioButtonItem}>
          <RadioButton
            value="option10"
            status={selectedOption === 'option10' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOption('option10')}
            color="#F16877"
            uncheckedColor="#F16877"
            borderColor="#F16877"
            borderWidth={0.5}
          />
          <Text style={styles.radioButtonLabel}>Sesi 10: Tips Dialog Mudah Dengan Anak | Dr. Wido Supraha, M.Si.</Text>
        </View>
        <View style={styles.radioButtonItem}>
          <RadioButton
            value="option11"
            status={selectedOption === 'option11' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOption('option11')}
            color="#F16877"
            uncheckedColor="#F16877"
            borderColor="#F16877"
            borderWidth={0.5}
          />
          <Text style={styles.radioButtonLabel}>Sesi 11: Problem dan Solusi Pendidikan Anak | Dr. Wido Supraha, M.Si.</Text>
        </View>
      </View>
      <Text style={styles.label}>Posisi Rumah Tangga</Text>
      <View style={styles.radioButtonContainer}>
        <View style={styles.radioButtonItem}>
          <RadioButton
            value="option1"
            status={selectedOptionTwo === 'option1' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOptionTwo('option1')}
            color="#F16877"
            uncheckedColor="#F16877"
            borderColor="#F16877"
            borderWidth={0.5}
          />
          <Text style={styles.radioButtonLabel}>Ayah</Text>
        </View>

        <View style={styles.radioButtonItem}>
          <RadioButton
            value="option2"
            status={selectedOptionTwo === 'option2' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOptionTwo('option2')}
            color="#F16877"
            uncheckedColor="#F16877"
            borderColor="#F16877"
            borderWidth={0.5}
          />
          <Text style={styles.radioButtonLabel}>Bunda</Text>
        </View>

      </View>
      <Text style={styles.label}>Nama Lengkap Ananda:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Nama Lengkap"
      />
      <Text style={styles.label}>Kelas Ananda (Diisi khusus bagi Wali Murid SAIM)</Text>
      <View style={styles.radioButtonContainer}>
        <View style={styles.radioButtonItem}>
          <RadioButton
            value="option1"
            status={selectedOptionThree === 'option1' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOptionThree('option1')}
            color="#F16877"
            uncheckedColor="#F16877"
            borderColor="#F16877"
            borderWidth={0.5}
          />
          <Text style={styles.radioButtonLabel}>Kelas 1A</Text>
        </View>

        <View style={styles.radioButtonItem}>
          <RadioButton
            value="option2"
            status={selectedOptionThree === 'option2' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOptionThree('option2')}
            color="#F16877"
            uncheckedColor="#F16877"
            borderColor="#F16877"
            borderWidth={0.5}
          />
          <Text style={styles.radioButtonLabel}>Kelas 1B</Text>
        </View>
        <View style={styles.radioButtonItem}>
          <RadioButton
            value="option3"
            status={selectedOptionThree === 'option3' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOptionThree('option3')}
            color="#F16877"
            uncheckedColor="#F16877"
            borderColor="#F16877"
            borderWidth={0.5}
          />
          <Text style={styles.radioButtonLabel}>Kelas 2A</Text>
        </View>
        <View style={styles.radioButtonItem}>
          <RadioButton
            value="option4"
            status={selectedOptionThree === 'option4' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOptionThree('option4')}
            color="#F16877"
            uncheckedColor="#F16877"
            borderColor="#F16877"
            borderWidth={0.5}
          />
          <Text style={styles.radioButtonLabel}>Kelas 2B</Text>
        </View>
        <View style={styles.radioButtonItem}>
          <RadioButton
            value="option5"
            status={selectedOptionThree === 'option5' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOptionThree('option5')}
            color="#F16877"
            uncheckedColor="#F16877"
            borderColor="#F16877"
            borderWidth={0.5}
          />
          <Text style={styles.radioButtonLabel}>Kelas 3A</Text>
        </View>
        <View style={styles.radioButtonItem}>
          <RadioButton
            value="option6"
            status={selectedOptionThree === 'option6' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOptionThree('option6')}
            color="#F16877"
            uncheckedColor="#F16877"
            borderColor="#F16877"
            borderWidth={0.5}
          />
          <Text style={styles.radioButtonLabel}>Kelas 3B</Text>
        </View>
        <View style={styles.radioButtonItem}>
          <RadioButton
            value="option7"
            status={selectedOptionThree === 'option7' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOptionThree('option7')}
            color="#F16877"
            uncheckedColor="#F16877"
            borderColor="#F16877"
            borderWidth={0.5}
          />
          <Text style={styles.radioButtonLabel}>Kelas 4A</Text>
        </View>
        <View style={styles.radioButtonItem}>
          <RadioButton
            value="option8"
            status={selectedOptionThree === 'option8' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOptionThree('option8')}
            color="#F16877"
            uncheckedColor="#F16877"
            borderColor="#F16877"
            borderWidth={0.5}
          />
          <Text style={styles.radioButtonLabel}>Kelas 4B</Text>
        </View>
        <View style={styles.radioButtonItem}>
          <RadioButton
            value="option9"
            status={selectedOptionThree === 'option9' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedOptionThree('option9')}
            color="#F16877"
            uncheckedColor="#F16877"
            borderColor="#F16877"
            borderWidth={0.5}
          />
          <Text style={styles.radioButtonLabel}>Kelas Akselerasi</Text>
        </View>


      </View>
      <Text style={styles.label}>Nama Lengkap Ayah/Bunda | Contoh: Dr. H. Abdurrahman, M.Si. (perhatikan spasi, titik koma, huruf besar dan kecilnya):</Text>
      <TextInput
        style={styles.input}
        value={namaOrtu}
        onChangeText={(text) => setOrtu(text)}
        placeholder="Nama Lengkap Ayah/Bunda"
        keyboardType="nama-Ayah/Bunda"
      />
      <Text style={styles.label}>Nomor Whatsapp | Contoh: '+628123456789 (perhatikan formatnya dan diawali tandi petik satu)</Text>
      <TextInput
        style={styles.input}
        value={noWa}
        onChangeText={(text) => setNoWa(text)}
        placeholder="Nomor Whatsapp"
        keyboardType="nomor-whatsapp"
      />
      <Text style={styles.label}>Jam Kehadiran</Text>
      <TouchableOpacity
        style={styles.timeButton}
        onPress={handleOpenStartTimePicker}
      >
        <FontAwesome name="clock-o" size={24} color="#F16877" />
        {startTime ? (
          <Text style={styles.selectedTime}>{startTime}</Text>
        ) : (
          <Text style={styles.buttonText}>Jam Hadir</Text>
        )}
      </TouchableOpacity>

      <Text style={styles.label}>Jam Kepulangan</Text>
      <TouchableOpacity
        style={styles.timeButton}
        onPress={handleOpenEndTimePicker}
      >
        <FontAwesome name="clock-o" size={24} color="#F16877" />
        {endTime ? (
          <Text style={styles.selectedTime}>{endTime}</Text>
        ) : (
          <Text style={styles.buttonText}>Jam Pulang</Text>
        )}
      </TouchableOpacity>

      {isStartTimePickerVisible && (
        <DateTimePickerModal
          isVisible={isStartTimePickerVisible}
          mode="time"
          onConfirm={handleConfirmStartTime}
          onCancel={handleCancelTimePicker}
        />
      )}

      {isEndTimePickerVisible && (
        <DateTimePickerModal
          isVisible={isEndTimePickerVisible}
          mode="time"
          onConfirm={handleConfirmEndTime}
          onCancel={handleCancelTimePicker}
        />
      )}

      <Text style={styles.label}>Nama Lengkap Ayah/Bunda | Contoh: Dr. H. Abdurrahman, M.Si. (perhatikan spasi, titik koma, huruf besar dan kecilnya):</Text>
      <TextInput
        style={styles.input}
        value={namaOrtu}
        onChangeText={(text) => setOrtu(text)}
        placeholder="Nama Lengkap Ayah/Bunda"
        keyboardType="nama-Ayah/Bunda"
      />

      <Text style={styles.label}>Alesan Terlambat ?</Text>
      <TextInput
        style={styles.input}
        value={alasan}
        onChangeText={(text) => setAlasan(text)}
        placeholder="Alasan Terlambat"
        keyboardType="alasan-terlambat"
      />

      <View>
        <Text style={styles.label}>"Silahkan Ayah/Bunda bisa memasukkan catatannya di kolom paragraf atau upload filenya. File bisa hasil ketikan, atau tulisan tangan yang dijepret dengan kamera untuk kemudian diunggah ke link. Boleh pilih yang mana saja yang memudahkan. Lebih kami sarankan dalam bentuk tulisan paragraf saja."</Text>
      </View>

      <Text style={{ marginBottom: 5, }} >1. Opsi Pertama, masukkan resume Ayah/Bunda disini dari hasil ketikan di laptop atau ketikan jempol di HP. Resume mengandung hal-hal baru yang didapatkan dari sesi kali ini. Dapat dituliskan poin per poin tanpa dibatasi jumlahnya.</Text>
      <TextInput
        style={styles.textarea}
        value={message}
        onChangeText={(text) => setMessage(text)}
        placeholder="Masukkan Pesan"
        multiline={true}
        numberOfLines={4}
      />

      <Text style={{ marginBottom: 5, }} >2. Opsi kedua, masukkan resume Ayah/Bunda disini jika ingin langsung mengambil foto dari coretannya di atas kertas.</Text>
      {selectedFile && (
        <View style={styles.selectedFileContainer}>
          <FontAwesome name="file" size={24} color="#F16877" />
          <Text style={styles.selectedFileName}>{selectedFile.name}</Text>
        </View>
      )}
      <TouchableOpacity
        style={[
          styles.fileButton,
          selectedFile ? { borderColor: '#4CAF50' } : { borderColor: '#ccc' },
        ]}
        onPress={handleSelectFile}
      >
        <FontAwesome
          name="upload"
          size={24}
          color={selectedFile ? '#4CAF50' : '#ccc'}
        />
        <Text
          style={[
            styles.buttonText,
            selectedFile ? { color: '#4CAF50' } : { color: '#ccc' },
          ]}
        >
          Pilih Berkas
        </Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.button} onPress={handleSendMessage}>

        <Text style={styles.buttonText}>Kirim Pesan</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Konfirmasi</Text>
          <Text style={styles.modalMessage}>Apakah Anda yakin ingin mengirim jawaban?</Text>
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity style={[styles.modalButton, { backgroundColor: '#F16877' }]} onPress={handleConfirmSendMessage}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.modalButton, { backgroundColor: '#CCCCCC' }]} onPress={handleCancelSendMessage}>
              <Text style={styles.modalButtonText}>Batal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 80,
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderColor: '#F16877',
    borderRadius: 8,
  },
  textarea: {
    borderWidth: 1,
    borderColor: '#F16877',
    marginBottom: 12,
    paddingHorizontal: 8,
    paddingTop: 8,
    textAlignVertical: 'top',
    height: 120,
    borderRadius: 5,
  },
  fileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 12,

  },
  selectedFileName: {
    fontSize: 18,
    textAlign: 'center',
    marginLeft: 8,
  },
  radioButtonContainer: {
    marginBottom: 10,
  },
  radioButtonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    color: Colors.gold,
  },
  radioButtonLabel: {
    fontSize: 14,
    marginLeft: 10,
  },
  timeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 12,
    borderColor: '#F16877',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    fontColors: Colors.black,
    borderRadius: 5,

  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    margin: 10,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#F16877',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FormInput;
