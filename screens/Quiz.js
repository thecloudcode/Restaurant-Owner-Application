import React, {useState, useEffect}from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Dimensions, TouchableOpacity, TextInput, Switch } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import FooterComponent from '../components/footer';
// import { Ionicons } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
// import FastImage from 'react-native-fast-image';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import { Amplify, Storage } from 'aws-amplify';
import awsconfig from './../src/aws-exports';

// import * as SecureStore from 'expo-secure-store';

Amplify.configure(awsconfig);

// import HeaderComponent from '../components/header';
// import HeaderComponent from '../components/header home screen';
// import BelowHeaderComponent from '../components/subjectsbelowheader';

const { width: screenWidth } = Dimensions.get('window');

const HomeMainScreen = ({navigation}) => {

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    fetchJsonFromS3();
  }, []);

  const fetchJsonFromS3 = async () => {
    try {
      const url = await Storage.get(`profile4/menu.json`, { level: 'public' });
      console.log('URL:', url);
  
      if (url) {
        const response = await fetch(url);
        // console.log(response)
        if (response.status === 404) {
          setFoodItems([]); // Set foodItems as an empty array if the file is not found
        } else {
          const jsonData = await response.json();
          console.log(jsonData);
          setFoodItems(jsonData);
        }
      } else {
        setFoodItems(null); // Set foodItems as null if the URL is not available
      }
    } catch (error) {
      console.error('Error fetching JSON from S3:', error);
    }
  };
  

return (
    <View style={{height: '100%'}}>
      <View style={{height: 100, marginTop: 30}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
        <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 27, fontWeight: 'bold', marginLeft: 5}}>Menu</Text>
        </View>
        <View style={{flexDirection: 'row', width:60, justifyContent: 'space-between', marginTop: 7, marginBottom: 20}}>
      <TouchableOpacity onPress={()=>navigation.push('Notifications')}>
        <Ionicons name="md-notifications" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.push('Menu')}>
        <MaterialIcons name="menu" size={24} color="black" />
      </TouchableOpacity>
      </View>
        </View>
        <View style={{flexDirection:'row', paddingLeft: 15}}>
        <View style={{backgroundColor: 'white', padding: 7, elevation: 4, borderRadius: 7, marginRight: 10}}>
          <Text>Out of Stock (0)</Text>
        </View>
        <View style={{backgroundColor: 'white', padding: 7, elevation: 4, borderRadius: 7, marginRight: 10}}>
          <Text>No Photos (0)</Text>
        </View>
        </View>
      </View>
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
    {foodItems.map((item, index) => (
        <View key={index} style={styles.imageContainer}>
        <View style={{borderTopColor:'black', width: screenWidth-20, flexDirection:'row', justifyContent: 'space-between', backgroundColor: 'white', borderRadius:10, padding: 10, marginHorizontal:20, elevation: 4, height: 257}}>
        <View style={{flexDirection:'column'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: screenWidth-40}}>
        <Text style={{fontSize: 17, marginTop: 10}}>{item.mealType}</Text>
        {/* <Text style={{fontSize: 17, marginTop: 10}}>image: {item.image}</Text> */}
        <Switch
        trackColor={{ false: 'black', true: 'green' }}
        thumbColor={isEnabled ? 'white' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      
      </View>
      <View style={{flexDirection: 'row', width:screenWidth-70}}>
      <View>
      <View style={{flexDirection: 'row'}}>
        {item.vegOrNonVeg === 'Veg' ? (
        <Image
        source={{ uri: 'https://5.imimg.com/data5/SELLER/Default/2023/1/FC/HP/EV/74736417/plain-barcode-labels.jpeg' }}
        style={{ height: 20, width: 19, marginRight: 5, marginTop: 3 }}
        />
        ) : (
        <Image
        source={{ uri: 'https://www.vhv.rs/dpng/d/437-4370761_non-veg-icon-non-veg-logo-png-transparent.png' }}
        style={{ height: 21, width: 19, marginRight: 5, marginTop: 3 }}
        />
        )}


        <Text style={{fontSize: 20, fontWeight: 'bold',flexWrap: 'wrap', width: 200 , marginBottom: 10}}>{item.name}</Text>
        </View>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>₹{item.cost}</Text>
        <Text style={{ fontSize: 11, flexWrap: 'wrap', width: 200 }} >
  {item.description}
</Text>
        </View>
        {/* <Text>{item.image}</Text> */}
        {/* <Image
  source={{ uri: item.image }}
  style={{ height: 130, width: 150, marginRight: 5, marginTop: 3, borderRadius: 10 }}
  onError={(error) => console.error('Image load error:', error.nativeEvent.error)}
/> */}


        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, width: screenWidth-20, marginLeft: -10}}>

        <TouchableOpacity style={{width: 170, height: 40, padding:10, elevation: 4, backgroundColor: 'white',  borderRadius:10, justifyContent: 'center', alignItems:'center'}}>
          <Text style={{fontWeight: 'bold'}}>View Details</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{width: 170, height: 40, padding:10, elevation: 4, backgroundColor: 'black',  borderRadius:10, justifyContent: 'center', alignItems:'center'}}>
          <Text style={{color:'white', fontWeight: 'bold'}}>Edit</Text>
        </TouchableOpacity>
        </View>
        </View>
        <TouchableOpacity style={{marginTop: 12}} >
        </TouchableOpacity>
        </View>
        </View>
    ))}
    <View style={{height: 50}}></View>
    </ScrollView>

    <TouchableOpacity style={{position:'absolute', top: 720, left: 320, height: 70, width: 70, borderRadius: 100, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', elevation: 10}} onPress={() => {
          navigation.push('AddItemInMenu');
        }}>
    <FontAwesome name="plus" size={24} color="black" />
    </TouchableOpacity>
    </View>
);
};

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <HomeMainScreen navigation={navigation}/>
      </View>
      <FooterComponent navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    width: '100%'
    
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    // marginHorizontal: 10,
  },
  searchBar: {
    marginHorizontal: 10,
    borderRadius: 5,
    marginTop: 17,
    height: 40,
    elevation: 4,
    backgroundColor: 'white',
    
    // borderWidth: 1,
    padding: 10,
    marginBottom: 16,
  },
  imageName: {
    marginLeft: 10,
    // marginTop: 13,
    height: 30,
    color: 'black',
    fontSize: 12,
    // fontWeight: 'bold',
  },
  imageTitle: {
    marginLeft: 10,
    marginTop: 13,
    height: 30,
    fontSize: 22,
    fontWeight: 'bold',
  },
  scrollViewContainer: {
    flexGrow: 1,
    // marginTop: -17,
    paddingVertical: 20,
    alignItems: 'center',
  },
  image: {
    width: screenWidth-20,
    marginHorizontal:20,
    height: 250,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // elevation: 4
    // borderRadius: 10,
  },
  offers:{
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize:20,
  },
  offers2:{
    marginLeft: 10,
    // fontWeight: 'bold',
    fontSize:13,
  },
  GMtext:{
    // marginLeft: 10,
    fontWeight: 'bold',
    fontSize:27,
  },
  welcome:{
    // marginLeft: 10,
    // fontWeight: 'bold',
    fontSize:13,
  },
});

export default Home;
