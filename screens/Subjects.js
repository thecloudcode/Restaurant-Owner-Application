import React, {useState}from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Dimensions, TouchableOpacity, TextInput, Switch } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import FooterComponent from '../components/footer';
// import { Ionicons } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
// import FastImage from 'react-native-fast-image';
// import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

// import HeaderComponent from '../components/header';
// import HeaderComponent from '../components/header home screen';
// import BelowHeaderComponent from '../components/subjectsbelowheader';

const { width: screenWidth } = Dimensions.get('window');

// const images2 = [
//   'https://images.pexels.com/photos/7353388/pexels-photo-7353388.jpeg',
//   'https://images.pexels.com/photos/7353388/pexels-photo-7353388.jpeg',
//   'https://images.pexels.com/photos/7353388/pexels-photo-7353388.jpeg',
//   'https://images.pexels.com/photos/7353388/pexels-photo-7353388.jpeg',
//   'https://images.pexels.com/photos/7353388/pexels-photo-7353388.jpeg',
//   'https://images.pexels.com/photos/7353388/pexels-photo-7353388.jpeg',
// ];

const images = [
  {
    orderId: 'Offers and Discounts',
    orderTime: 'Start your own offers and grow your business',
    items: [
      { name: 'Hyderabadi Chicken Biryani', quantity: 2, price: 300 },
      { name: 'Chapter 1 The Prince of Birmingham', quantity: 1, price: 150 },
    ],
    totalBill: 750,
    image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/product-discounts-design-template-2fdf699890b1d0cdf371e9de704035cf_screen.jpg?ts=1610023963'
  },
  {
    orderId: 'Create Ads',
    orderTime: 'Create your own personalized ads',
    items: [
      { name: 'Offers', quantity: 3, price: 250 },
    ],
    totalBill: 750,
    image: 'https://static.vecteezy.com/system/resources/previews/009/384/620/original/fresh-pizza-and-pizza-box-clipart-design-illustration-free-png.png'
  }
    // Add more image objects as needed
  ];

const HomeMainScreen = ({navigation}) => {

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

return (
    <View style={{height: '100%'}}>
      <View style={{height: 70, marginTop: 30}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, borderBottomWidth: 1, borderBottomColor: '#a6a6a6'}}>
        <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20, marginTop: 10, }}>
      {/* <Switch
        trackColor={{ false: 'black', true: 'green' }}
        thumbColor={isEnabled ? 'white' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> */}
        {/* <Text>{isEnabled ? 'Online' : 'Offline'}</Text> */}
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Grow Your Business</Text>
        </View>
        {/* <View style={{flexDirection: 'row', width:100, justifyContent: 'space-between', marginTop: 7, marginBottom: 20}}> */}
        {/* <TouchableOpacity>
        <Ionicons name="md-search" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="md-notifications" size={24} color="black" />
      </TouchableOpacity> */}

      <TouchableOpacity style={{marginTop: 14}} onPress={()=>navigation.push('Menu')}>
        <MaterialIcons name="menu" size={27} color="black" />
      </TouchableOpacity>
      {/* </View> */}
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
    <View style={{width:screenWidth-20}}>
    <Text style={{fontSize: 20}}>Recommendations for You</Text>
    </View>
    <View style={{width:screenWidth-20}}>
    <Text style={{fontSize: 15, marginTop: 10}}>ADS</Text>
    </View>
    <View style={{ width: screenWidth - 20, borderRadius: 10, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 5}}>
    {/* <View style={{flexDirection: 'column'}}>
    <Text style={styles.GMtext}>Good Morning, Sara!</Text>
    <Text style={styles.welcome}>The Taste of Ability!</Text>
    </View> */}
    </View>
    {/* <View style={{ height: 40, width: screenWidth - 170, marginTop: 20, marginBottom: 20, borderRadius: 40, marginBottom: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 5, backgroundColor: 'black', elevation: 1}}> */}
    {/* <View style={{flexDirection: 'column'}}>
    <Text style={{color:'white', fontWeight: 'bold', fontSize: 17}}>Your Orders For Today</Text> */}
    {/* <Text style={styles.welcome}>Welcome To Euphelity Food!</Text> */}
    {/* </View> */}
    {/* </View> */}
    <View style={{ height: 150, width: screenWidth - 20, marginHorizontal: 20, backgroundColor: 'white', borderRadius: 10, elevation: 4, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
    <View style={{flexDirection: 'column'}}>
    <Text style={styles.offers}>Boost your Restaurant</Text>
    <Text style={styles.offers2}>Increase Visibility</Text>
    <TouchableOpacity style={{backgroundColor: 'black', borderRadius: 20, height: 30, justifyContent:'center', alignItems: 'center', marginLeft: 10, marginTop: 10}}>
      <Text style={{color: 'white', fontWeight:'bold'}}>Get Started</Text>
    </TouchableOpacity>
    </View>
    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY8V1tK84Cw3TokQGxN3igezP8h4hKkb6lAh-zzQ1dubQs4_rHtIJ0_jOZgomHuGhGKeI&usqp=CAU' }} style={{ height: 100, width: 100 }} />
    </View>

    <View style={{width:screenWidth-20}}>
    <Text style={{fontSize: 15, marginTop: 10}}>OFFERS</Text>
    </View>

    <ScrollView
      style={styles.container}
      horizontal={true}
      contentContainerStyle={styles.scrollViewContent}
    >
      
      <View style={[styles.box, { elevation: 2 }]} >
        <Text style={styles.discount}>30%</Text>
        <Text>Upto Rs. 75</Text>
        <TouchableOpacity style={{backgroundColor: 'black', borderRadius: 20, height: 30, justifyContent:'center', alignItems: 'center', marginLeft: 10, marginTop: 30}}>
      <Text style={{color: 'white', fontWeight:'bold'}}>Apply</Text>
    </TouchableOpacity>
      </View>
      <View style={[styles.box, { elevation: 4 }]} >
      <Text style={styles.discount}>20%</Text>
        <Text>Upto Rs. 50</Text>
        <TouchableOpacity style={{backgroundColor: 'black', borderRadius: 20, height: 30, justifyContent:'center', alignItems: 'center', marginLeft: 10, marginTop: 30}}>
      <Text style={{color: 'white', fontWeight:'bold'}}>Apply</Text>
    </TouchableOpacity>
      </View>
      <View style={[styles.box, { elevation: 6 }]} >
      <Text style={styles.discount}>10%</Text>
        <Text>Upto Rs. 25</Text>
        <TouchableOpacity style={{backgroundColor: 'black', borderRadius: 20, height: 30, justifyContent:'center', alignItems: 'center', marginLeft: 10, marginTop: 30}}>
      <Text style={{color: 'white', fontWeight:'bold'}}>Apply</Text>
    </TouchableOpacity>
      </View>
    </ScrollView>
    {images.map((image, index) => (
        <View key={index} style={styles.imageContainer}>
        {/* <View style={{borderRadius: 10, backgroundColor: 'black'}}> */}
        {/* <Image source={{ uri: image.uri }} style={styles.image} resizeMode="cover" /> */}
        {/* </View> */}
        <View style={{borderTopColor:'black', width: screenWidth-20, flexDirection:'row', borderRadius:10, padding: 10, marginHorizontal:20, height: 100, backgroundColor: 'white', elevation: 4}}>
        <Image source={{ uri: image.image  }} style={{ height: 70, width: 70 }} />
        
        <View style={{flexDirection:'column'}}>
        {/* <View style={{height: 30, width: 30, borderRadius: 20, elevation: 1, marginLeft: 7, marginTop: 10, backgroundColor: 'white'}}></View> */}
        <Text style={styles.imageTitle}>{image.orderId}</Text>
        <Text style={styles.imageDes}>{image.orderTime}</Text>
        {/* <Text style={styles.imageTitle}>{image.orderTime}</Text> */}
        {/* {image.items.map((item, index) => ( */}
        {/* <Text key={index} style={styles.itemName}> */}
          {/* - {item.quantity}x {item.name} (Price: {item.price} Rs) */}
        {/* </Text> */}
      {/* ))} */}
        {/* <Text style={styles.imageTitle}>Total Bill: {image.totalBill}</Text> */}
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
    fontSize: 22,
    fontWeight: 'bold',
  },
  imageDes: {
    marginLeft: 10,
    // marginTop: 13,
    height: 30,
    fontSize: 14,
    // fontWeight: 'bold',
  },
  scrollViewContainer: {
    flexGrow: 1,
    // marginTop: -17,
    // paddingVertical: 20,
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
  scrollViewContent: {
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 10,
    paddingLeft: 5,
    // paddingBottom: 10,
    paddingTop: 10,
    paddingBottom: 20,
    paddingRight: 10
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    marginHorizontal: 8,
    borderRadius: 8,
    padding: 20
  },
  discount:{
    fontSize: 50,
    fontWeight: 'bold'
  }
});

export default Home;
