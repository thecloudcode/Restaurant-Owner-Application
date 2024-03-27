import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Button, Image } from 'react-native';
import { Amplify, Storage } from 'aws-amplify';
import awsconfig from './../src/aws-exports';

// import * as SecureStore from 'expo-secure-store';
// import { PureNativeButton } from 'react-native-gesture-handler';

Amplify.configure(awsconfig);
// const publicImageUri2 = await Storage.get(`profile4/${newItem.name}.jpeg`, { level: 'public' });


const AddFoodItemScreen = ({navigation}) => {
  
  const [newItem, setNewItem] = useState({
    name: '',
    cost: '',
    mealType: '',
    description: '',
    vegOrNonVeg: '',
    image: '',
    active: 1,
  });

  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    fetchJsonFromS3();
  }, []);

  const fetchJsonFromS3 = async () => {
    try {
      const url = await Storage.get(`profile4/menu.json`, { level: 'public' });
      // console.log('URL:', url);
  
      if (url) {
        const response = await fetch(url);
        
        if (response.status === 404) {
          setFoodItems([]); // Set foodItems as an empty array if the file is not found
        } else {
          const jsonData = await response.json();
          setFoodItems(jsonData);
        }
      } else {
        setFoodItems(null); // Set foodItems as null if the URL is not available
      }
    } catch (error) {
      console.error('Error fetching JSON from S3:', error);
    }
  };
  
  
  

  const handleAddItem = async () => {
    if (newItem.name && newItem.mealType && newItem.description && newItem.vegOrNonVeg) {
      try {
        // Fetch the image URI and add it to newItem
        const publicImageUri = await Storage.get(`profile4/${newItem.name}.jpeg`, { level: 'public' });
        newItem.image = publicImageUri;
  
        // Add the newItem to the existing foodItems array
        const updatedFoodItems = [...foodItems, newItem];
        
        // Update the state with the updated foodItems array
        setFoodItems(updatedFoodItems);
        
        // Clear the newItem state
        setNewItem({
          name: '',
          cost: '',
          mealType: '',
          description: '',
          vegOrNonVeg: '',
          image: '',
          active: 1,
        });
        
        // Upload the updated foodItems array to S3
        await Storage.put(`profile4/menu.json`, JSON.stringify(updatedFoodItems), {
          level: 'public',
          contentType: 'application/json',
          metadata: {
            existingFile: true,
          },
        });
        
        console.log('Item added:', newItem);
        console.log('JSON file uploaded successfully.');
      } catch (error) {
        console.error('Error adding item:', error);
      }
    } else {
      console.log('Please fill out all fields');
    }
  };
  

  const uploadJson = async () => {
    try {

      // console.log('iamnewitem',newItem.name);
      // const fetchImage = async () => {
      //   try {
      //     const publicImageUri = await Storage.get(`profile4/${newItem.name}.jpeg`, { level: 'public' });
      //     console.log(publicImageUri);
      //     setNewItem({ ...newItem, image: publicImageUri }); // Add the image URI to newItem
      //   } catch (error) {
      //     console.error('Error fetching image:', error);
      //   }
      // };
  
      // // Call fetchImage directly (no need for useEffect here)
      // await fetchImage();
  
      const fileExists = await Storage.get(`profile4/menu.json`, { level: 'public' });
  
      if (fileExists) {
        await Storage.put(`profile4/menu.json`, JSON.stringify(foodItems), {
          level: 'public',
          contentType: 'application/json',
          metadata: {
            existingFile: true,
          },
        });
      } else {
        await Storage.put(`profile4/menu.json`, JSON.stringify(foodItems), {
          level: 'public',
          contentType: 'application/json',
        });
      }
  
      console.log('JSON file uploaded successfully.');
    } catch (error) {
      console.error('Error uploading JSON file:', error);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Food Item</Text>
      {/* <Text style={styles.header}>image : {publicImageUri2}</Text> */}

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={newItem.name}
        onChangeText={(text) => setNewItem({ ...newItem, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Cost"
        value={newItem.cost.toString()}
        onChangeText={(text) => setNewItem({ ...newItem, cost: parseInt(text) })}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Meal Type"
        value={newItem.mealType}
        onChangeText={(text) => setNewItem({ ...newItem, mealType: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={newItem.description}
        onChangeText={(text) => setNewItem({ ...newItem, description: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Veg or Non-Veg"
        value={newItem.vegOrNonVeg}
        onChangeText={(text) => setNewItem({ ...newItem, vegOrNonVeg: text })}
      />
      {/* <Image
      source={{ uri: publicImageUri2 }}
      style={{ height: 130, width: 150, marginRight: 5, marginTop: 3, borderRadius: 10 }}
      onError={(error) => console.error('Image load error:', error.nativeEvent.error)}
      /> */}
{/* 
<TouchableOpacity onPress={()=>navigation.push('UploadImage', {imagename :newItem.name })} style={{height: 50,width: 370, padding: 10, backgroundColor: 'black', borderRadius: 10, justifyContent: 'center', alignItems: 'center', elevation: 4, marginTop: 10}}>
        <Text style={{color: 'white', fontWeight:'bold'}}>Image</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={{height: 50,width: 370, padding: 10, backgroundColor: 'black', borderRadius: 10, justifyContent: 'center', alignItems: 'center', elevation: 4, marginTop: 10}}>
        <Text style={{color: 'white', fontWeight:'bold'}}>Image</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleAddItem} style={{ height: 50, width: 370, padding: 10, backgroundColor: 'black', borderRadius: 10, justifyContent: 'center', alignItems: 'center', elevation: 4, marginTop: 10 }}>
  <Text style={{ color: 'white', fontWeight: 'bold' }}>Add Item</Text>
</TouchableOpacity>


      <TouchableOpacity onPress={()=>navigation.goBack()} style={{height: 50,width: 370, padding: 10, backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', elevation: 4, marginTop: 10}}>
        <Text style={{color: 'black', fontWeight:'bold'}}>Go Back</Text>
      </TouchableOpacity>

      {/* <Text styles={styles.header}>Food Items</Text>
          {foodItems.map((item, index) => (
      <View key={item.name}>
        <Text>{item.name}</Text>
        <Text>{item.cost}</Text>
        <Text>{item.mealType}</Text>
        <Text>{item.description}</Text>
        <Text>{item.vegOrNonVeg}</Text>
      </View>
    ))} */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default AddFoodItemScreen;
