// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
// import { Amplify, Storage } from 'aws-amplify';
// import awsconfig from './../src/aws-exports';

// import * as SecureStore from 'expo-secure-store';

// Amplify.configure(awsconfig);

// // const foodItems = [
// //   {
// //     name: 'Hyderabadi Chicken Biryani',
// //     cost: 300,
// //     mealType: 'Lunch/Dinner',
// //     description: 'A flavorful rice dish made with basmati rice, tender chicken, and aromatic spices.',
// //     vegOrNonVeg: 'Non-Veg',
// //     image: '',
// //     active: 1,
// //   },
// // ];

// const AddFoodItemScreen = () => {
  
//   const [newItem, setNewItem] = useState({
//     name: '',
//     cost: 0,
//     mealType: '',
//     description: '',
//     vegOrNonVeg: '',
//     image: '',
//     active: 1,
//   });

//   const [foodItems, setFoodItems] = useState([]);

//   useEffect(() => {
//     fetchJsonFromS3();
//   }, []);

//   const fetchJsonFromS3 = async () => {
//     try {
//       const url = await Storage.get(`profile4/menu.json`, { level: 'public' });
//       console.log('URL:', url);
  
//       if (url) {
//         const response = await fetch(url);
        
//         if (response.status === 404) {
//           setFoodItems([]); // Set foodItems as an empty array if the file is not found
//         } else {
//           const jsonData = await response.json();
//           setFoodItems(jsonData);
//         }
//       } else {
//         setFoodItems(null); // Set foodItems as null if the URL is not available
//       }
//     } catch (error) {
//       console.error('Error fetching JSON from S3:', error);
//     }
//   };
  
  
  

//   const handleAddItem = () => {
//     if (newItem.name && newItem.mealType && newItem.description && newItem.vegOrNonVeg) {
//       foodItems.push(newItem);
//       setNewItem({
//         name: '',
//         cost: 0,
//         mealType: '',
//         description: '',
//         vegOrNonVeg: '',
//         image: '',
//         active: 1,
//       });
//       console.log('Item added:', newItem);
//       uploadJson();
//       // storeJsonInSecureStore('foodItems',JSON.stringify(foodItems));
//     } else {
//       console.log('Please fill out all fields');
//     }
//   };

//   const uploadJson = async () => {
//     try {
//       // setIsLoading(true);
//       const fileExists = await Storage.get(`profile4/menu.json`, { level: 'public' });
  
//       if (fileExists) {
//         await Storage.put(`profile4/menu.json`, JSON.stringify(foodItems), {
//           level: 'public',
//           contentType: 'application/json',
//           metadata: {
//             existingFile: true, // You can add any custom metadata here
//           },
//         });
//       } else {
//         // If the file doesn't exist, create it
//         await Storage.put(`profile4/menu.json`, JSON.stringify(foodItems), {
//           level: 'public',
//           contentType: 'application/json',
//         });
//       }
  
//       // setIsLoading(false);
//       console.log('JSON file uploaded successfully.');
//     } catch (error) {
//       console.error('Error uploading JSON file:', error);
//       // setIsLoading(false);
//     }
//   };

//   // const storeJsonInSecureStore = async (key, jsonValue) => {
//   //   try {
//   //     const jsonString = JSON.stringify(jsonValue);
//   //     await SecureStore.setItemAsync(key, jsonString);
//   //     console.log('JSON data stored in SecureStore.');
//   //   } catch (error) {
//   //     console.error('Error storing JSON data:', error);
//   //   }
//   // };

//   // const fetchJsonFromSecureStore = async (key) => {
//   //   try {
//   //     const jsonString = await SecureStore.getItemAsync(key);
//   //     if (jsonString) {
//   //       const jsonData = JSON.parse(jsonString);
//   //       console.log('JSON data fetched from SecureStore:', jsonData);
//   //       return jsonData;
//   //     } else {
//   //       console.log('No JSON data found in SecureStore.');
//   //       return null;
//   //     }
//   //   } catch (error) {
//   //     console.error('Error fetching JSON data:', error);
//   //     return null;
//   //   }
//   // };
  
//   // foodItems=fetchJsonFromSecureStore('foodItems');
  
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Add New Food Item</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={newItem.name}
//         onChangeText={(text) => setNewItem({ ...newItem, name: text })}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Cost"
//         value={newItem.cost.toString()}
//         onChangeText={(text) => setNewItem({ ...newItem, cost: parseInt(text) })}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Meal Type"
//         value={newItem.mealType}
//         onChangeText={(text) => setNewItem({ ...newItem, mealType: text })}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Description"
//         value={newItem.description}
//         onChangeText={(text) => setNewItem({ ...newItem, description: text })}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Veg or Non-Veg"
//         value={newItem.vegOrNonVeg}
//         onChangeText={(text) => setNewItem({ ...newItem, vegOrNonVeg: text })}
//       />
//       <Button title="Add Item" onPress={handleAddItem} />

//       <Text styles={styles.header}>Food Items</Text>
//       {foodItems.map((item, index) => (
//         <>
//         <Text key={index}>{item.name}</Text>
//         <Text key={index}>{item.cost}</Text>
//         <Text key={index}>{item.mealType}</Text>
//         <Text key={index}>{item.description}</Text>
//         <Text key={index}>{item.vegOrNonVeg}</Text>
//         </>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 10,
//   },
// });

// export default AddFoodItemScreen;
