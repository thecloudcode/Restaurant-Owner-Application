import React, {useState} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

import * as SecureStore from 'expo-secure-store';

const { width: screenWidth } = Dimensions.get('window');

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
  console.log('Success');
}

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    alert("🔐 Here's your value 🔐 \n" + result);
  } else {
    alert('No values stored under that key.');
  }
}

const SignInScreen = ({navigation}) => {

  const [email, setemail] = useState('');
  const isemailValid = email.length === 5;

  const handleSend = ({email}) => {

    const min = 100000;
    const max = 999999; 
    const code = Math.floor(Math.random() * (max - min + 1)) + min;
    save('code',String(code));
    console.log(JSON.stringify({ email, code }));
    if (email && code) {
      fetch('https://backcloud.onrender.com/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({ email, code }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            console.log('Check Junk Email or Inbox, Email Sent!')
          } else {
            console.log('Failed to Send Email');
          }
        })
        .catch((error) => {
          console.error(error);
          console.log('Something went wrong');
        });
    } else {
      // Alert.alert('Error', 'Please enter email and passcode');
      console.log('Please Enter College Email and Password');
    }
    // getValueFor('code');

    navigation.push('OTP');
  };


  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.pinimg.com/564x/fd/ef/d7/fdefd75fe2eacab1cdbe51b862402885.jpg' }} style={{ position:'absolute',height: 700, width:screenWidth}} />
       
      <View style={styles.container2}>
        
      <View style={{width: '100%', alignContent:'flex-start', paddingLeft: 40}}>
      <Image source={{ uri: 'https://i.pinimg.com/564x/44/4c/bf/444cbf978a679eeb7ffe4c43030952d2.jpg' }} style={{ height: 200, width: 200, position: 'absolute', bottom: 20, borderRadius:100, left: screenWidth/2-100}} />
      <Text style={styles.title}>Sign Up</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        // keyboardType="phone-pad"
        value={email}
        onChangeText={(text) => setemail(text)}
      />
      <TouchableOpacity
        style={[styles.signInButton]}
        onPress={() => handleSend({email})}
      >
        <Text style={styles.signInButtonText}>Sign Up</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Already have an account? Sign In</Text>
      </TouchableOpacity> */}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d0d0d',
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
  logo: {
    width: 400,
    height: 400,
    position: 'absolute',
    top :-50,
    left: -120,
    opacity: 0.2,
    // marginBottom: 20,
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
  forgotPasswordButton: {
    marginBottom: 10,
    marginRight: 40,
    // width: '100%',
    alignSelf: 'flex-end',
    // justifyContent: 'flex-end'
    // alignContent: 'flex-start',
  },
  forgotPasswordText: {
    color: 'black',
  },
  signInButton: {
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
  signInButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpButton: {
    marginBottom: 20,
    top: 100,
  },
  signUpButtonText: {
    color: 'black',
    // fontSize: 16,
    // fontWeight: 'bold',
  },
});

export default SignInScreen;
