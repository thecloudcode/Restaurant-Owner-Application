import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions} from 'react-native';

import * as SecureStore from 'expo-secure-store';
const { width: screenWidth } = Dimensions.get('window');


// async function getValueFor(key) {
//   let result = await SecureStore.getItemAsync(key);
//   if (result) {
//     // alert("🔐 Here's your value 🔐 \n" + result);
//     console.log(result);
//   } else {
//     console.log('not found');
//     // alert('No values stored under that key.');
//   }
// }

const VerificationScreen = ({navigation}) => {

    // getValueFor('code');
    const [confirmationCode, setConfirmationCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    async function handleVerify(key) {
      // Implement verification logic here
      let result = await SecureStore.getItemAsync(key);
      if(String(result)===String(confirmationCode)){
        console.log("Successfully Verified!");
        navigation.push('ResInfo');
      }else{
        console.log("Not Verified!");
      }

    };
  
    const handleSave = () => {
      // Implement save logic here
    };
  
    return (
      <View style={styles.container}>
        <Image source={{ uri: 'https://i.pinimg.com/564x/fd/ef/d7/fdefd75fe2eacab1cdbe51b862402885.jpg' }} style={{ position:'absolute',height: 700, width:screenWidth}} />
        <View style={styles.container2}>
        <View style={{width: '100%', alignContent:'flex-start', paddingLeft: 40}}>
      <Image source={{ uri: 'https://i.pinimg.com/564x/44/4c/bf/444cbf978a679eeb7ffe4c43030952d2.jpg' }} style={{ height: 200, width: 200, position: 'absolute', bottom: 20, borderRadius:100, left: screenWidth/2-100}} />
      <Text style={styles.title}>OTP</Text>
      </View>
        <TextInput
          style={styles.input}
          placeholder="Confirmation Code"
          value={confirmationCode}
          onChangeText={text => setConfirmationCode(text)}
        />
  
        <TouchableOpacity style={styles.verifyButton} onPress={()=>handleVerify('code')}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
  
        {/* {confirmationCode && (
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={text => setPassword(text)}
            />
  
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
            />
  
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View> */}
        {/* )} */}
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      alignItems: 'center',
    },
    container2: {
      width: '100%',
      flex: 1,
      // justifyContent: 'center',
      paddingTop: 50,
      alignItems: 'center',
      backgroundColor: '#fff',
      marginTop: 300,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      elevation: 10,
    },
    title: {
      fontSize: 34,
      fontWeight: 'bold',
      marginBottom: 20,
      color: 'black',
      top: 100,
      // marginTop: 50,
    },
    input: {
        width: '80%',
        height: 50,
        // borderWidth: 1,
        backgroundColor: '#d9d9d9',
        // borderColor: '#ccc',
        borderRadius: 27,
        paddingHorizontal: 17,
        marginBottom: 10,
        top: 100,

    },
    verifyButton: {
        height: 50,
        backgroundColor: 'black',
        paddingVertical: 10,
        borderRadius: 27,
        paddingHorizontal: 17,
        width: '80%',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        top: 100,

    },
    saveButton: {
      backgroundColor: 'green',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
    passwordContainer: {
      marginTop: 20,
      alignItems: 'center',
    },
  });
  
  export default VerificationScreen;
  