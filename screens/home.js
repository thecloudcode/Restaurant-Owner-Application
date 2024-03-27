import React, {useState, useEffect}from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Dimensions, TouchableOpacity, TextInput, Switch} from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import FooterComponent from '../components/footer';
// import { Ionicons } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
// import FastImage from 'react-native-fast-image';
// import { FontAwesome } from '@expo/vector-icons';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';


import { Amplify, Storage } from 'aws-amplify';
import awsconfig from './../src/aws-exports';

Amplify.configure(awsconfig);

// import HeaderComponent from '../components/header';
// import HeaderComponent from '../components/header home screen';
// import BelowHeaderComponent from '../components/subjectsbelowheader';

const { width: screenWidth } = Dimensions.get('window');

const images2 = [
  'https://images.pexels.com/photos/7353388/pexels-photo-7353388.jpeg',
  'https://images.pexels.com/photos/7353388/pexels-photo-7353388.jpeg',
  'https://images.pexels.com/photos/7353388/pexels-photo-7353388.jpeg',
  'https://images.pexels.com/photos/7353388/pexels-photo-7353388.jpeg',
  'https://images.pexels.com/photos/7353388/pexels-photo-7353388.jpeg',
  'https://images.pexels.com/photos/7353388/pexels-photo-7353388.jpeg',
];

const HomeMainScreen = ({navigation}) => {

  const [time, setTime] = useState('');
  
  const handleTextChange = (text) => {
    setTime(text);
  };

  const [images, setimages] = useState([]);
  useEffect(() => {
    fetchJsonFromS3();
  }, []);

  const fetchJsonFromS3 = async () => {
    try {
      const url = await Storage.get(`profile4/orders.json`, { level: 'public' });
      const shop = await Storage.get(`profile4/openorclosed.json`, { level: 'public' });
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

      if (shop){
        const response2 = await fetch(shop);
        if (response2.status === 404){
          setIsEnabled(false);
        }else{
          const data = await response2.json();
          setIsEnabled(data);
          console.log(data);
        }
      }
    } catch (error) {
      console.error('Error fetching shop JSON data from S3:', error);
    }
  };

  const uploadJson = async ({data, filename}) => {
    try {  
      const fileExists = await Storage.get(`profile4/${filename}.json`, { level: 'public' });
  
      if (fileExists) {
        await Storage.put(`profile4/${filename}.json`, JSON.stringify(data), {
          level: 'public',
          contentType: 'application/json',
          metadata: {
            existingFile: true,
          },
        });
      } else {
        await Storage.put(`profile4/${filename}.json`, JSON.stringify(data), {
          level: 'public',
          contentType: 'application/json',
        });
      }
  
      console.log('JSON file uploaded successfully.');
    } catch (error) {
      console.error('Error uploading JSON file:', error);
    }
  };

  const [uploadedText, setUploadedText] = useState('');

  useEffect(() => {
    fetchUploadedText(); // Fetch the uploaded text when the component mounts
  }, []);

  const fetchUploadedText = async () => {
    try {
      const response = await Storage.get('profile3/owner.txt', {
        download: true,
      });
      const textContent = await response.Body.text();
      setUploadedText(textContent);
      console.log(textContent);
    } catch (error) {
      console.error('Error fetching text:', error);
    }
  };

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = async () => {
    
    if(isEnabled){
    uploadJson({data: false, filename: "openorclosed"});
    }else{
      uploadJson({data: true, filename: "openorclosed"});
    }
    setIsEnabled(previousState => !previousState);
  };

  const [minutes, setMinutes] = useState(0);

  const increaseMinutes = (minute) => {
    // setMinutes(minutes + 1);
    return minute+1;
  };

  const decreaseMinutes = () => {
    if (minutes > 0) {
      setMinutes(minutes - 1);
    }
  };

  const updateOrderStatus = (orderIdToUpdate, value) => {
    console.log(orderIdToUpdate);
    const updatedData = images.map((order) => {
      if (order.orderId === String(orderIdToUpdate)) {
        return { ...order, status: value };
      }
      return order;
    });
    console.log('update',updatedData);
  
    // return updatedData;
    uploadJson({data: updatedData, filename: "orders"});
  };

  // const updateOrderTime = (orderIdToUpdate, value) => {
  //   console.log(orderIdToUpdate);
  //   const updatedData = images.map((order) => {
  //     if (order.orderId === String(orderIdToUpdate)) {
  //       return { ...order, : value };
  //     }
  //     return order;
  //   });
  //   console.log('update',updatedData);
  
  //   // return updatedData;
  //   uploadJson({data: updatedData, filename: "orders"});
  // };



return (
    <View style={{height: '100%'}}>
      <View style={{height: 50, marginTop: 30}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
        <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
      <Switch
        trackColor={{ false: 'black', true: 'green' }}
        thumbColor={isEnabled ? 'white' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
        <Text>{isEnabled ? 'Online' : 'Offline'}</Text>

        </View>
        <View style={{flexDirection: 'row', width:60, justifyContent: 'space-between', marginTop: 7, marginBottom: 20}}>
        {/* <TouchableOpacity>
        <Ionicons name="md-search" size={24} color="black" />
      </TouchableOpacity> */}

      <TouchableOpacity onPress={()=>navigation.push('Notifications')}>
        <Ionicons name="md-notifications" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.push('Menu')}>
        <MaterialIcons name="menu" size={24} color="black" />
      </TouchableOpacity>
      </View>
        </View>
        {/* <View style={{flexDirection:'row', paddingLeft: 15}}>
        <View style={{backgroundColor: 'white', padding: 7, elevation: 4, borderRadius: 7, marginRight: 10}}>
          <Text>Prepared (0)</Text>
        </View>
        <View style={{backgroundColor: 'white', padding: 7, elevation: 4, borderRadius: 7, marginRight: 10}}>
          <Text>Ready (0)</Text>
        </View>
        <View style={{backgroundColor: 'white', padding: 7, elevation: 4, borderRadius: 7, marginRight: 10}}>
          <Text>Picked (0)</Text>
        </View>
        <View style={{backgroundColor: 'white', padding: 7, elevation: 4, borderRadius: 7, marginRight: 10}}>
          <Text>Returned (0)</Text>
        </View>
        </View> */}
        
      {/* <TextInput
        style={styles.searchBar}
        placeholder="Search"
        // value={searchText}
        // onChangeText={text => setSearchText(text)}
      /> */}
      {/* <FontAwesome name="microphone" size={24} color="grey" /> */}
      </View>
      {/* <ScrollView horizontal>
      <View style={{ flexDirection: 'row' }}>
        {images2.map((imageUrl, index) => (
          <FastImage
            key={index}
            source={{ uri: imageUrl }}
            style={{ width: 150, height: 150, margin: 10 }}
            resizeMode={FastImage.resizeMode.cover}
          />
        ))}
      </View>
    </ScrollView> */}
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <View style={{ height: 40, width: screenWidth - 20, borderRadius: 10, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 5}}>
    <View style={{flexDirection: 'column'}}>
    <Text style={styles.GMtext}>Hello, {uploadedText}!</Text>
    <Text style={styles.welcome}>Welcome to The Taste of Ability!</Text>
    </View>
    </View>
    <View style={{ height: 40, width: screenWidth - 170, marginTop: 20, marginBottom: 20, borderRadius: 40, marginBottom: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 5, backgroundColor: 'black', elevation: 1}}>
    <View style={{flexDirection: 'column'}}>
    <Text style={{color:'white', fontWeight: 'bold', fontSize: 17}}>Your Orders For Today</Text>
    {/* <Text style={styles.welcome}>Welcome To Euphelity Food!</Text> */}
    </View>
    </View>
    <View style={{ height: 150, width: screenWidth - 20, marginHorizontal: 20, backgroundColor: 'white', borderRadius: 10, elevation: 4, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
    <View style={{flexDirection: 'column'}}>
    <Text style={styles.offers}>Boost your Orders</Text>
    <Text style={styles.offers2}>Create Promotions</Text>
    </View>
    <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/002/811/028/original/gift-box-christmas-present-icon-free-vector.jpg' }} style={{ height: 100, width: 100 }} />
    </View>

    {images.map((image, index) => (
        <View key={index} style={styles.imageContainer}>
        {/* <View style={{borderRadius: 10, backgroundColor: 'black'}}> */}
        {/* <Image source={{ uri: image.uri }} style={styles.image} resizeMode="cover" /> */}
        {/* </View> */}
        <View style={{borderTopColor:'black', width: screenWidth-20, flexDirection:'row', justifyContent: 'space-between', backgroundColor: 'white', borderRadius:10, padding: 10, marginHorizontal:20, elevation: 4, height: 240}}>
        <View style={{flexDirection:'column'}}>
        {/* <View style={{height: 30, width: 30, borderRadius: 20, elevation: 1, marginLeft: 7, marginTop: 10, backgroundColor: 'white'}}></View> */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.imageTitle}>ID: {image.orderId}</Text>
        <Text style={styles.imageTitle}>{image.orderTime}</Text>
        </View>
        {image.items.map((item, index) => (
        <Text key={index} style={styles.itemName}>
          {item.quantity}x {item.name} (Price: {item.price} Rs)
        </Text>
      ))}
        <Text style={styles.imageTitle}>Total Bill: {image.totalBill}</Text>
        {/* <Text style={styles.imageTitle}>Total Bill: {image.status}</Text> */}

        <View style={{flexDirection: 'row', marginLeft: 10}}>
        <View style={styles.incrementcontainer}>
        {/* <TouchableOpacity onPress={decreaseMinutes} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.minutesText}>{()=>increaseMinutes(0)} mins</Text>
        <TouchableOpacity onPress={increaseMinutes} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity> */}
        <TextInput
        style={{padding: 10,
          backgroundColor: 'white',
          borderRadius: 10,
          elevation: 4,
          color: 'white',
          height: 45,
          paddingHorizontal: 30,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 10,}}
          placeholder="Enter mins"
          onChangeText={handleTextChange}
          value={time}
        />

        
        <TouchableOpacity
        style={{
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 4,
        color: 'white',
        height: 45,
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        }}
        >
        <Text style={{ color: 'black' }} onPress={() => {
        if (image.status === "1") {
        updateOrderStatus(image.orderId, "2");
        } else {
        updateOrderStatus(image.orderId, "3");
        }
        }}>
        {image.status === "1" ? "Accept" : "Deliver"}
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{padding: 10,
        backgroundColor: 'black',
        borderRadius: 10,
        elevation: 4,
        color: 'white',
        height: 45,
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,}} onPress={()=>{updateOrderStatus(image.orderId, "4")}}>
          <Text style={{color:'white'}}>Decline</Text>
        </TouchableOpacity>
        </View>
        
        </View>
        {/* <Text style={styles.imageTitle}>ID: {image.orderId}</Text> */}
        {/* <Text style={styles.imageTitle}>ID: {image.orderId}</Text> */}
        {/* <Text style={styles.imageTitle}>ID: {image.orderId}</Text> */}
        {/* <Text style={styles.imageName}>{image.name}</Text> */}
        {/* <Text style={styles.imageName}>{image.details}</Text>  */}
        </View>
        <TouchableOpacity style={{marginTop: 12}}>
        {/* <MaterialCommunityIcons name="dots-vertical" size={20} color="black" /> */}
        </TouchableOpacity>
        </View>
        </View>
    ))}
    <View style={{height: 50}}></View>
    </ScrollView>
    </View>
);
};

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <HeaderComponent navigation={navigation}/> */}
      {/* <BelowHeaderComponent /> */}
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
    fontSize: 12,
    // fontWeight: 'bold',
  },
  imageTitle: {
    marginLeft: 10,
    marginTop: 13,
    height: 30,
    fontSize: 17,
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
  incrementcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    width: 50,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginHorizontal: 10,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
  minutesText: {
    fontSize: 20,
  },
  itemName:{
    marginLeft: 7,
    marginTop: 10,
  }
});

export default Home;
