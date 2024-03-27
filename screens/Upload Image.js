// import React, { useState, useEffect } from 'react';
// import { TouchableOpacity, View, Text, Image, StyleSheet, Dimensions } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { Amplify, Storage } from 'aws-amplify';
// import awsconfig from './../src/aws-exports';
// import * as SecureStore from 'expo-secure-store';
// import { useRoute } from '@react-navigation/native';

// Amplify.configure(awsconfig);

// const { width: screenWidth } = Dimensions.get('window');
// const imageHeight = screenWidth / 1.33333;

// const ImagePickerScreen = ({ navigation }) => {
//   const route = useRoute();
//   const { imagename } = route.params;
//   console.log(imagename);

//   const [pickedImage, setPickedImage] = useState(null);

//   useEffect(() => {
//     pickImage();
//   }, []);

//   const pickImage = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) { // Change "cancelled" to "canceled"
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

//       const filename = `profile4/${imagename}.jpeg`; // Set the desired path and filename
//       await Storage.put(filename, blob, {
//         contentType: 'image/jpeg', // Specify the content type of the image
//         level: 'public', // Set the access level to "public"
//       });

//       navigation.goBack();
//       console.log('Image uploaded successfully');
//     } catch (error) {
//       console.error('Error uploading image', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {pickedImage && <Image source={{ uri: pickedImage }} style={styles.image} />}

//       {pickedImage && (
//         <TouchableOpacity
//           onPress={uploadImage}
//           style={{
//             height: 50,
//             width: 370,
//             padding: 10,
//             backgroundColor: '#1a1a1a',
//             borderRadius: 10,
//             justifyContent: 'center',
//             alignItems: 'center',
//             elevation: 4,
//             marginTop: 10,
//           }}
//         >
//           <Text style={{ color: 'white', fontWeight: 'bold' }}>Upload</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: screenWidth,
//     height: imageHeight,
//     marginTop: 20,
//   },
// });

// export default ImagePickerScreen;
