import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../Shared/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';



const FormInput = () => {
    const [title, SetTitle] = useState('Ujian Sarat')
    const [questionOne, setQuestionOne] = useState('');
    const [questionTwo, setQuestionTwo] = useState('');
    const [questionThree, setQuestionThree] = useState('');
    const [questionFour, setQuestionFour] = useState('');
    const [questionFive, setQuestionFive] = useState('');
    const [questionSix, setQuestionSix] = useState('');
    const [questionSeven, setQuestionSeven] = useState('');
    const [questionEight, setQuestionEight] = useState('');
    const [questionNine, setQuestionNine] = useState('');
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

    const handleSendMessage = () => {
        setModalVisible(true);
    };

    const handleConfirmSendMessage = async () => {
        const formData = {
            title,
            questionOne,
            questionTwo,
            questionThree,
            questionFour,
            questionFive,
            questionSix,
            questionSeven,
            questionEight,
            questionNine,
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

        setQuestionOne('');
        setQuestionTwo('');
        setQuestionThree('');
        setQuestionFour('');
        setQuestionFive('');
        setQuestionSix('');
        setQuestionSeven('');
        setQuestionEight('');
        setQuestionNine('');
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
            <Text style={styles.title}>Soal Tes Orang Tua</Text>
            <Text style={styles.label}>1. Apa pendapat Ayah Bunda tentang peran orangtua dalam pendidikan anak? Sejauh mana idealnya keikutsertaan orang tua dalam Pendidikan anak?</Text>
            <TextInput
                style={styles.input}
                value={questionOne}
                onChangeText={(text) => setQuestionOne(text)}
                placeholder="Jawaban"
            />

            <Text style={styles.label}>2. Apa yang Ayah Bunda harapkan dari sebuah institusi Pendidikan dan bagaimana pentingnya sinergi dalam Pendidikan?</Text>
            <TextInput
                style={styles.input}
                value={questionTwo}
                onChangeText={(text) => setQuestionTwo(text)}
                placeholder="Jawaban"
            />

            <Text style={styles.label}>3. Bagaimana pendapat Ayah dan Bunda tentang urgensi Pendidikan adab?</Text>
            <TextInput
                style={styles.input}
                value={questionThree}
                onChangeText={(text) => setQuestionThree(text)}
                placeholder="Jawaban"
            />
            <Text style={styles.label}>4. Pendidikan adab merupakan proses yang tidak instan, namun memerlukan waktu, konsistensi dan kerjasama berbagai pihak. Studi kasus: Ananda sebagai murid di Sekolah Adab pada suatu hari berkunjung ke rumah tetangga dan melakukan suatu perbuatan yang kurang  baik sehingga menimbulkan reaksi dari tuan rumah dengan 	mengatakan: “Sekolah di Sekolah Adab tapi begitu”. Bagaimana Ayah dan	Bunda menyikapi hal ini?</Text>
            <TextInput
                style={styles.input}
                value={questionFour}
                onChangeText={(text) => setQuestionFour(text)}
                placeholder="Jawaban"
            />
            <Text style={styles.label}>5. Bagaimana cara Ayah Bunda meningkatkan ilmu yang dibutuhkan untuk mendidik anak di tengah-tengah kesibukan yang sangat padat?</Text>
            <TextInput
                style={styles.input}
                value={questionFive}
                onChangeText={(text) => setQuestionFive(text)}
                placeholder="Jawaban"
            />
            <Text style={styles.label}>6. Sekolah mengajak Ayah Bunda untuk berkomitmen mengikuti Sekolah Adab Orang Tua yang diselenggarakan setiap bulan minimal kehadiran 80% selama satu tahun ajaran. Bagaimana pendapat Ayah Bunda akan hal ini?</Text>
            <TextInput
                style={styles.input}
                value={questionSix}
                onChangeText={(text) => setQuestionSix(text)}
                placeholder="Jawaban"
            />
            <Text style={styles.label}>7. Apakah Ayah Bunda bersedia berkomitmen untuk bersama2 mendidik Ananda dan bersinergi dengan program program yang dibuat oleh sekolah?</Text>
            <TextInput
                style={styles.input}
                value={questionSeven}
                onChangeText={(text) => setQuestionSeven(text)}
                placeholder="Jawaban"
            />
            <Text style={styles.label}>8. Bagaimanakah Ayah Bunda menyiasati waktu, agar ananda tidak terlambat masuk sekolah jam 6.00 pagi?</Text>
            <TextInput
                style={styles.input}
                value={questionEight}
                onChangeText={(text) => setQuestionEight(text)}
                placeholder="Jawaban"
            />
            <Text style={styles.label}>9. Apakah Ayah Bunda bersedia untuk berkomitmen mengikuti agenda rutin sekolah yang telah ditetapkan seperti SARAT (Sekolah Adab Orangtua) yang diadakan setiap bulan dan JKQ (Jambore Keluarga Quran) yang diadakan setiap tahun?</Text>
            <TextInput
                style={styles.input}
                value={questionNine}
                onChangeText={(text) => setQuestionNine(text)}
                placeholder="Jawaban"
            />
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
        margin:10,
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
