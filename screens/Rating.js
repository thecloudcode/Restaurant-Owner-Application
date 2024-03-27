import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  // TextInput,
  // Switch,
} from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import FooterComponent from '../components/footer';
// import { Feather } from '@expo/vector-icons';
// import FastImage from 'react-native-fast-image';
// import { FontAwesome } from '@expo/vector-icons';
// import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import { Amplify, Storage } from 'aws-amplify';
import awsconfig from './../src/aws-exports';

Amplify.configure(awsconfig);

const { width: screenWidth } = Dimensions.get('window');

const App = ({ navigation }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchJsonFromS3();
  }, []);

  const fetchJsonFromS3 = async () => {
    try {
      const url = await Storage.get(`profile4/ratings.json`, { level: 'public' });
      if (url) {
        const response = await fetch(url);

        if (response.status === 404) {
          setImages([]); // Set images as an empty array if the file is not found
        } else {
          const jsonData = await response.json();
          // Sort the data by averageRating in descending order
          const sortedData = jsonData.sort((a, b) => b.averageRating - a.averageRating);
          setImages(sortedData);
          console.log(sortedData);
        }
      } else {
        setImages(null); // Set images as null if the URL is not available
      }
    } catch (error) {
      console.error('Error fetching shop JSON data from S3:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Text>Total Bill: ${totalBill}</Text> */}
      </View>
      {images.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          {/* <Text style={styles.itemName}>{item.name}</Text> */}
          <Text style={styles.itemSales}>{`${item.name}`}</Text>
          <Text style={styles.itemSales}>{`${item.averageRating}`}</Text>
        </View>
      ))}

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          height: 50,
          width: 370,
          padding: 10,
          backgroundColor: 'black',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 4,
          marginTop: 10,
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemSales: {
    fontSize: 16,
    // color: 'green',
  },
});

export default App;
