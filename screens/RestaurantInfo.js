import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image, Dimensions} from 'react-native';
import { Amplify, Storage } from 'aws-amplify';
import awsconfig from './../src/aws-exports';
import * as SecureStore from 'expo-secure-store';


const { width: screenWidth } = Dimensions.get('window');


Amplify.configure(awsconfig);

export default function App({navigation}) {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [owner, setOwner] = useState('');
  const [Description, setDescription] = useState('');
  const [contact, setContact] = useState('');

  const storeLoginValue = async (value) => {
    try {
      await SecureStore.setItemAsync('login', value.toString());
      console.log('Login Saved!');
    } catch (error) {
      // Handle the error (e.g., show an alert or log it)
      console.error('Error storing login value:', error);
    }
  };

  const uploadText = async () => {
    try {
      setIsLoading(true);
      
      // Upload each input's value as a separate file
      await Promise.all([
        Storage.put(`profile3/name.txt`, name, {
          level: 'public',
          contentType: 'text/plain',
        }),
        Storage.put(`profile3/address.txt`, address, {
          level: 'public',
          contentType: 'text/plain',
        }),
        Storage.put(`profile3/owner.txt`, owner, {
          level: 'public',
          contentType: 'text/plain',
        }),
        Storage.put(`profile3/description.txt`, Description, {
          level: 'public',
          contentType: 'text/plain',
        }),
        Storage.put(`profile3/contact.txt`, contact, {
          level: 'public',
          contentType: 'text/plain',
        }),
      ]);

      setIsLoading(false);
      console.log('Texts uploaded successfully.');
    } catch (error) {
      console.error('Error uploading texts:', error);
      setIsLoading(false);
    }
    storeLoginValue(1);
    navigation.push('Home');
  };

  return (
    <View style={styles.container}>
      {/* <View style={{width: '80%'}}>
      <Text style={styles.label}>Restaurant Name</Text>
      </View> */}
      <Image source={{ uri: 'https://i.pinimg.com/564x/fd/ef/d7/fdefd75fe2eacab1cdbe51b862402885.jpg' }} style={{ position:'absolute',height: 700, width:screenWidth}} />
       
       <View style={styles.container2}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 20}}>Restaurant Info</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Restaurant Name..."
        value={name}
        onChangeText={setName}
      />

      {/* <View style={{width: '80%'}}>
      <Text style={styles.label}>Address</Text>
      </View> */}
      <TextInput
        style={styles.textInput}
        placeholder="Address..."
        value={address}
        onChangeText={setAddress}
      />
{/* 
      <View style={{width: '80%'}}>
      <Text style={styles.label}>Restaurant Owner</Text>
      </View> */}
      <TextInput
        style={styles.textInput}
        placeholder="Restaurant Owner..."
        value={owner}
        onChangeText={setOwner}
      />
{/* 
      <View style={{width: '80%'}}>
      <Text style={styles.label}>Description</Text>
      </View> */}
      <TextInput
        style={styles.textInput2}
        placeholder="Description..."
        value={Description}
        onChangeText={setDescription}
      />
{/* 
      <View style={{width: '80%'}}>
      <Text style={styles.label}>Contact Number</Text>
      </View> */}
      <TextInput
        style={styles.textInput}
        placeholder="Contact Number..."
        value={contact}
        onChangeText={setContact}
      />

      

      <TouchableOpacity onPress={uploadText} style={styles.button}>
        <Text style={styles.buttonText}>
          {isLoading ? 'Uploading...' : 'Upload'}
        </Text>
      </TouchableOpacity>
    </View>

    </View>
  );
}

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
        marginTop: 200,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        elevation: 10,
      },
      textInput: {
        width: '80%',
        height: 50,
        // borderWidth: 1,
        backgroundColor: '#d9d9d9',
        // borderColor: '#ccc',
        borderRadius: 27,
        paddingHorizontal: 17,
        marginBottom: 10,
      },
      textInput2: {
        width: '80%',
        height: 50,
        // borderWidth: 1,
        backgroundColor: '#d9d9d9',
        // borderColor: '#ccc',
        borderRadius: 27,
        paddingHorizontal: 17,
        marginBottom: 10,
        height: 100,
      },
      button: {
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
      buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
      },
      instructions: {
        fontSize: 16,
        marginBottom: 20,
      },
      uploadedText: {
        marginTop: 20,
        fontSize: 16,
        textAlign: 'center',
      },
      label:{
        fontSize: 10,
      }
    });