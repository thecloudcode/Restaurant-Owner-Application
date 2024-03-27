// import React from 'react';
// import { View, StyleSheet, Text, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import FooterComponent from '../components/footer';
// import HeaderComponent from '../components/SubjectHeader';
// import { LinearGradient } from 'expo-linear-gradient';

// import BelowHeaderComponent from '../components/subjectsbelowheader';

// const { width: screenWidth } = Dimensions.get('window');

// const images = [
//     {
//       title: 'Hindi',
//       name: 'Chapter 1 The Prince of Birmingham',
//       uri: 'https://img.freepik.com/free-vector/gradient-abstract-purple-color-background-design_343694-2875.jpg',
//     },
//     {
//         title: 'Hindi',
//         name: 'Chapter 1 The Prince of Birmingham',
//       uri: 'https://img.freepik.com/free-vector/gradient-abstract-purple-color-background-design_343694-2875.jpg',
//     },
//     {
//         title: 'Hindi',
//       name: 'Chapter 1 The Prince of Birmingham',
//         uri: 'https://img.freepik.com/free-vector/gradient-abstract-purple-color-background-design_343694-2875.jpg',
//       },
//       {
//         title: 'Hindi',
//       name: 'Chapter 1 The Prince of Birmingham',
//         uri: 'https://img.freepik.com/free-vector/gradient-abstract-purple-color-background-design_343694-2875.jpg',
//       },
//       {
//         title: 'Hindi',
//       name: 'Chapter 1 The Prince of Birmingham',
//         uri: 'https://img.freepik.com/free-vector/gradient-abstract-purple-color-background-design_343694-2875.jpg',
//       },
//     // Add more image objects as needed
//   ];

// const HomeSubjectScreen = ({navigation}) => {
// return (
//     <View style={{height: '120%'}}>
//     <ScrollView contentContainerStyle={styles.scrollViewContainer}>
//     {images.map((image, index) => (
//         <TouchableOpacity key={index} style={styles.imageContainer}>
        
//         <LinearGradient
//               colors={['rgba(0,0,0,0)','rgba(0,0,0,0.7)']}
//               style={styles.overlay}>
//         <View>
//         <Text style={styles.imageTitle}>{image.title}</Text>
//         <Text style={styles.imageName}>{image.name}</Text>
//         </View>
//         <TouchableOpacity style={{marginTop: 7}}>
//         <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
//         </TouchableOpacity>
//               </LinearGradient>

//         <Image source={{ uri: image.uri }} style={styles.image} resizeMode="cover" />
        
//         <View style={{borderTopColor:'black', borderTopWidth: 0, width: screenWidth, flexDirection:'row', justifyContent: 'space-between'}}>
        
//         </View>
//         </TouchableOpacity>
//     ))}
//     <View style={{height: 50}}></View>
//     </ScrollView>
//     </View>
// );
// };

// const Subjects = ({navigation}) => {
//   return (
//     <View style={styles.container}>
//       <HeaderComponent navigation={navigation} subject='Hindi'/>
//       {/* <BelowHeaderComponent /> */}
//       <View style={styles.contentContainer}>
//         <HomeSubjectScreen navigation={navigation}/>
//       </View>
//       <FooterComponent navigation={navigation}/>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//     width: '100%'
    
//   },
//   contentContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: 50,
//   },
//   mainContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   imageContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   imageName: {
//     // marginLeft: 4,
//     // marginTop: 10,
//     // height: 30,
//     fontSize: 16,
//     color: 'rgba(255,255,255,0.5)',

//     // color: 'white',
//     // fontWeight: 'bold',
//   },
//   imageTitle: {
//     // marginLeft: 7,
//     marginTop: 10,
//     // height: 30,
//     fontSize: 16,
//     color :'white',
//     fontWeight: 'bold',
//   },
//   scrollViewContainer: {
//     flexGrow: 1,
//     // marginTop: -17,
//     paddingVertical: 20,
//     alignItems: 'center',
//   },
//   image: {
//     width: screenWidth - 30,
//     height: 250,
//     borderRadius: 20,
//   },
//   overlay: {
//     position: 'absolute',
//     width: screenWidth - 30,
//     top: 150,
//     height: 100,
//     borderRadius: 20,
//     zIndex: 100,
//     paddingBottom: 20,
//     paddingHorizontal: 20,
//     flexDirection: 'row',

//     // justifyContent: 'flex-end', // Aligns elements to the bottom in the row direction
//     alignItems: 'flex-end',
//     justifyContent: 'space-between', // Aligns elements to the bottom in the column direction
//   },


// });

// export default Subjects;
