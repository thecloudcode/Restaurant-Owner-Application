import React, {useState, useEffect}from 'react';
import { ScrollView, Text, View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import { Amplify, Storage } from 'aws-amplify';
import awsconfig from './../src/aws-exports';

Amplify.configure(awsconfig);

const restaurantDetails = {
  name: 'Delicious Eats',
  address: '123 Main Street, Cityville',
  panDetails: 'ABCD1234XYZ',
  ownerName: 'John Doe',
  description: 'Introducing "Savor Haven" – a culinary oasis nestled in the heart of the city. Delight in a symphony of flavors as Savor Haven takes you on a gastronomic journey like no other. Our meticulously crafted menu boasts a fusion of global cuisines, using only the freshest ingredients sourced from local markets. The inviting ambiance combines rustic charm with modern elegance, creating the perfect backdrop for intimate dinners or lively gatherings. With a commitment to exceptional service, Savor Haven promises an unforgettable dining experience, where each dish tells a story and every moment is a celebration of taste, culture, and togetherness.'
};

const { width: screenWidth } = Dimensions.get('window');



const App = ({navigation}) => {

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  // const [, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [des, setDes] = useState('');

  // useEffect(() => {
  //   fetchUploadedText('name'); // Fetch the uploaded text when the component mounts
  // }, []);

  useEffect(() => {
    const fetchTexts = async () => {
      try {
        const nameResponse = await Storage.get('profile3/name.txt', {
          download: true,
        });
        setName(await nameResponse.Body.text());

        const addressResponse = await Storage.get('profile3/address.txt', {
          download: true,
        });
        setAddress(await addressResponse.Body.text());

        const ownerResponse = await Storage.get('profile3/owner.txt', {
          download: true,
        });
        setOwner(await ownerResponse.Body.text());

        const desResponse = await Storage.get('profile3/description.txt', {
          download: true,
        });
        setDes(await desResponse.Body.text());
      } catch (error) {
        console.error('Error fetching text:', error);
      }
    };

    fetchTexts();
  }, []);

  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
      <Image
  source={{ uri: 'https://us.123rf.com/450wm/djvstock/djvstock2305/djvstock230511315/204046636-a-rustic-italian-still-life-wine-pasta-meat-and-bread-generated-by-artificial-intelligence.jpg?ver=6' }}
  style={styles.restaurantImage}
  resizeMode="cover"
/>

      </View>
      <Text style={styles.restaurantName}>{name}</Text>
      <Text style={styles.address}>{address}</Text>
      
      <View style={{padding: 10, height: 50, width: screenWidth-40, backgroundColor: 'black',  borderRadius: 10, marginLeft: 20, justifyContent: 'center'}}>
      <Text style={styles.info2}>Owner: {owner}</Text>
      </View>
      {/* <Text style={styles.info}>PAN: {restaurantDetails.panDetails}</Text> */}
      <Text style={styles.smallText2}>Quality Food Delivered to Your Doorstep</Text>

      <Text style={styles.smallText}>{des}</Text>

    </ScrollView>
    <TouchableOpacity onPress={() => navigation.goBack()} style={{height: 50,width: 370, padding: 10, backgroundColor: 'black', borderRadius: 10, justifyContent: 'center', alignItems: 'center', elevation: 4, marginVertical: 10, marginHorizontal: 20}}>
        <Text style={{color: 'white', fontWeight:'bold'}}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingVertical: 40,
  },
  imageContainer: {
    marginBottom: 20,
  },
  restaurantImage: {
    width: screenWidth,
    height: screenWidth,
    // borderRadius: 100,
  },
  restaurantName: {
    elevation: 10,
    position: 'absolute',
    top: screenWidth-70,
    color: 'white',
    fontSize: 30,
    marginLeft: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  address: {
    elevation: 10,
    position: 'absolute',
    top: screenWidth-35,
    color: 'white',
    // fontSize: 30,
    marginLeft: 20,
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  smallText: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
    marginHorizontal: 20,
    // textAlign: 'center',
  },
  smallText2: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
    marginHorizontal: 20,
    fontWeight: 'bold',
    // textAlign: 'center',
  },
  info: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 16,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  info2: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    // marginBottom: 10,
    // marginHorizontal: 20,
  },
});

export default App;
