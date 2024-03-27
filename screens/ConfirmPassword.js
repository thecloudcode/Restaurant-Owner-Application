import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
const VerificationScreen = () => {
    const [confirmationCode, setConfirmationCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleVerify = () => {
      // Implement verification logic here
    };
  
    const handleSave = () => {
      // Implement save logic here
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={confirmationCode}
          onChangeText={text => setConfirmationCode(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmationCode}
          onChangeText={text => setConfirmationCode(text)}
        />
  
        <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
          <Text style={styles.buttonText}>Confirm</Text>
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
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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
        alignItems: 'center'
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
  