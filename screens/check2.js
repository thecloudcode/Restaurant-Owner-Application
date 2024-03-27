// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, Button, StyleSheet } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// import { Amplify, Storage } from 'aws-amplify';
// import awsconfig from './../src/aws-exports';

// import * as SecureStore from 'expo-secure-store';

// Amplify.configure(awsconfig);

// const ImagePickerScreen = () => {
//   const [pickedImage, setPickedImage] = useState(null);
//   const [imageUri, setImageUri] = useState(null);


//   const pickImage = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.cancelled) {
//       setPickedImage(result.uri);
//     }
//   };

//   const uploadImage = async () => {
//     try {
//       const blob = await new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.onload = function () {
//           resolve(xhr.response);
//         };
//         xhr.onerror = function (e) {
//           reject(new TypeError('Network request failed'));
//         };
//         xhr.responseType = 'blob';
//         xhr.open('GET', pickedImage, true);
//         xhr.send(null);
//       });
  
//       const filename = 'profile4/cool.jpeg'; // Set the desired path and filename
//       await Storage.put(filename, blob, {
//         contentType: 'image/jpeg', // Specify the content type of the image
//         level: 'public', // Set the access level to "public"
//       });
  
//       console.log('Image uploaded successfully');
//     } catch (error) {
//       console.error('Error uploading image', error);
//     }
//   };
  
//   const fetchImage = async () => {
//     try {
//       const publicImageUri = await Storage.get('profile4/cool.jpeg', { level: 'public' });
//       setImageUri(publicImageUri);
//     } catch (error) {
//       console.error('Error fetching image:', error);
//     }
//   };

//   useEffect(() => {
//     fetchImage();
//   }, []);
  
  
//   return (
//     <View style={styles.container}>
//       {/* <Text style={styles.title}>Image Picker</Text> */}
//       <Button title="Pick an Image" onPress={pickImage} />
//       {pickedImage && <Image source={{ uri: pickedImage }} style={styles.image} />}
//       {pickedImage && <Button title="Upload Image to AWS" onPress={uploadImage} />}

//       {imageUri ? (
//         <Image source={{ uri: imageUri }} style={styles.image} />
//       ) : (
//         <Text>No image available</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 20,
//     marginBottom: 20,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginTop: 20,
//   },
// });

// export default ImagePickerScreen;
