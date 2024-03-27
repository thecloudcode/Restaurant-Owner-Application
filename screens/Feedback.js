import React, {useState, useEffect}from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Dimensions, TouchableOpacity, TextInput, Switch} from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import FooterComponent from '../components/footer';
// // import { Ionicons } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
// import FastImage from 'react-native-fast-image';
// import { FontAwesome } from '@expo/vector-icons';
// import { Ionicons, MaterialIcons } from '@expo/vector-icons';


import { Amplify, Storage } from 'aws-amplify';
import awsconfig from './../src/aws-exports';

Amplify.configure(awsconfig);

const { width: screenWidth } = Dimensions.get('window');
// const images = [
//   { name: 'Burger', sales: 120 },
//   { name: 'Pizza', sales: 90 },
//   { name: 'Pasta', sales: 75 },
//   // Add more food items here
// ];



const App = ({navigation}) => {

  const [images, setimages] = useState([]);
  useEffect(() => {
    fetchJsonFromS3();
  }, []);

  const fetchJsonFromS3 = async () => {
    try {
      const url = await Storage.get(`profile4/feedback.json`, { level: 'public' });
      // const shop = await Storage.get(`profile4/openorclosed.json`, { level: 'public' });
      // console.log('URL:', url);
  
      if (url) {
        const response = await fetch(url);
        
        if (response.status === 404) {
          setimages([]); // Set images as an empty array if the file is not found
        } else {
          const jsonData = await response.json();
          setimages(jsonData);
          console.log(jsonData);
        }
      } else {
        setimages(null); // Set images as null if the URL is not available
      }

      // if (shop){
      //   const response2 = await fetch(shop);
      //   if (response2.status === 404){
      //     setIsEnabled(false);
      //   }else{
      //     const data = await response2.json();
      //     setIsEnabled(data);
      //     console.log(data);
      //   }
      // }
    } catch (error) {
      console.error('Error fetching shop JSON data from S3:', error);
    }
  };

//   const totalBill = images.reduce((total, item) => total + item.totalBill, 0);



  return (
    <ScrollView contentContainerStyle={styles.container}>

<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Text>Total Bill: ${totalBill}</Text> */}
    </View>
      {images.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          {/* <Text style={styles.itemName}>{item.name}</Text> */}
          <Text style={styles.itemSales}>{`Order ID $${item.order_id}`}</Text>
          <Text style={styles.itemSales}>{`${item.food_name}`}</Text>
          <Text style={styles.itemSales}>{`Review: ${item.review}`}</Text>
          <Text style={styles.itemSales}>{`Rating: ${item.rating}`}</Text>
        </View>
      ))}

<TouchableOpacity onPress={() => navigation.goBack()} style={{height: 50,width: 370, padding: 10, backgroundColor: 'black', borderRadius: 10, justifyContent: 'center', alignItems: 'center', elevation: 4, marginTop: 10}}>
        <Text style={{color: 'white', fontWeight:'bold'}}>Go Back</Text>
    </TouchableOpacity>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  itemContainer: {
    // flexDirection: 'row',
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
