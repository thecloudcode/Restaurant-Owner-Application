import React, {useState, useEffect}from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Dimensions, TouchableOpacity, TextInput, Switch} from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import FooterComponent from '../components/footer';
// import { Ionicons } from '@expo/vector-icons';
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

//   const [images, setimages] = useState([]);
const [totalBill, setTotalBill] = useState(0);

  useEffect(() => {
    async function fetchJsonFiles() {
      const currentDate = new Date();
      const lastSevenDays = new Date(currentDate);
      lastSevenDays.setDate(currentDate.getDate() - 7);

      try {
        // List objects in the S3 bucket
        const listResult = await Storage.list('profile4/', {
          level: 'public',
        });

        let total = 0;

        // Fetch and filter objects based on lastModified timestamp
        const filteredFiles = [];
        for (const file of listResult) {
          const fileLastModified = new Date(file.lastModified);
          if (fileLastModified >= lastSevenDays) {
            const fileData = await Storage.get(file.key, { level: 'private' });
            const jsonContent = JSON.parse(fileData);
            // Assuming the JSON structure is similar to your example
            jsonContent.forEach((order) => {
              total += order.totalBill;
            });
          }
        }

        setTotalBill(total);
      } catch (error) {
        console.error('Error fetching and processing JSON files:', error);
      }
    }

    fetchJsonFiles();
  }, []);

//   const totalBill = images.reduce((total, item) => total + item.totalBill, 0);



  return (
    <ScrollView contentContainerStyle={styles.container}>

<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Total Bill in this Week: ${totalBill}</Text>
    </View>
      {/* {images.map((item, index) => ( */}
        {/* <View key={index} style={styles.itemContainer}> */}
          {/* <Text style={styles.itemName}>{item.name}</Text> */}
          {/* <Text style={styles.itemSales}>{`Order ID ${item.orderId}: $${item.totalBill}`}</Text> */}
        {/* </View> */}
      {/* ))} */}

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    color: 'green',
  },
});

export default App;
