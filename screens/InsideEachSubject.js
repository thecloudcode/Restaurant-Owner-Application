// import React, { useEffect, useState } from "react";
// import { View, StyleSheet, Text, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import FooterComponent from '../components/footer';
// import { useNavigation} from '@react-navigation/native';
// import HeaderComponent from '../components/SubjectHeader';
// import { LinearGradient } from 'expo-linear-gradient';
// import { FontAwesome5 } from '@expo/vector-icons';
// import { MaterialIcons } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// import { useRoute } from '@react-navigation/native';


// // import { MaterialIcons } from '@expo/vector-icons';

// import Icon from 'react-native-vector-icons/FontAwesome';



// import BelowHeaderComponent from '../components/subjectsbelowheader';

// const { width: screenWidth } = Dimensions.get('window');

//   const HomeSubjectScreen = ({navigation}) => {


//     const navigation2 = useNavigation();
//     return (
//       <View style={{ height: '100%', width: screenWidth-40, flexDirection:'row', justifyContent: 'space-between'}}>
//         <View style={{flexDirection: 'column'}}>
//         <TouchableOpacity style={styles.box}>
//         <FontAwesome5 name="brain" size={40} color="#cce5ff" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.box2}>
//         <Ionicons name="game-controller" size={40} color="#cce5ff" />
//         </TouchableOpacity>
//         </View>
//         <View style={{flexDirection: 'column'}}>
//         <TouchableOpacity style={styles.box3}>
//         <Icon name="podcast" size={40} color="#cce5ff" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.box4}>
//         <MaterialIcons name="school" size={40} color="#cce5ff" />
//         </TouchableOpacity>
//         </View>
                
//       </View>
      
//     );
//   };
  

// const Subjects = ({navigation}) => {
//   const route = useRoute();
//   const { lesson } = route.params;
//   return (
//     <View style={styles.container}>
//       <HeaderComponent navigation={navigation} subject={lesson}/>
//       {/* <BelowHeaderComponent /> */}
//       <View style={styles.contentContainer}>
//         <HomeSubjectScreen navigation={navigation}/>
//       </View>
//       <FooterComponent />
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
//     // paddingTop: 50,
//   },
  
//   box:{
//     // width: screenWidth - 0,
//     width: 170,
//     height: 230,
//     alignContent: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     // paddingHorizontal: 20,
//     backgroundColor: 'white',
//     // paddingVertical: 20,
//     marginTop: 20,
//     borderRadius: 20,
//     elevation: 7,
//   },
//   box2:{
//     // width: screenWidth - 0,
//     width: 170,
//     height: 330,
//     // paddingHorizontal: 20,
//     backgroundColor: 'white',
//     // paddingVertical: 20,
//     marginTop: 20,
//     borderRadius: 20,
//     elevation: 7,
//     alignContent: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   box3:{
//     // width: screenWidth - 0,
//     width: 170,
//     height: 330,
//     // paddingHorizontal: 20,
//     backgroundColor: 'white',
//     // paddingVertical: 20,
//     marginTop: 20,
//     borderRadius: 20,
//     elevation: 7,
//     alignContent: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   box4:{
//     // width: screenWidth - 0,
//     width: 170,
//     height: 230,
//     // paddingHorizontal: 20,
//     backgroundColor: 'white',
//     // paddingVertical: 20,
//     marginTop: 20,
//     borderRadius: 20,
//     elevation: 7,
//     alignContent: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }



// });

// export default Subjects;
