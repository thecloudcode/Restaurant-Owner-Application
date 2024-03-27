import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BelowHeaderComponent from '../components/subjectsbelowheader';
import { LinearGradient } from 'expo-linear-gradient';


import { useNavigation } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');

const HeaderComponent = ({navigation}) => {
//   const navigation = useNavigation();

  return (
    <LinearGradient style={styles.headerContainer}
    colors={['white','white']}>
      {/* <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="ios-arrow-back" size={24} color="black" />
      </TouchableOpacity> */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, zIndex: 999}}>
      <View style={{flexDirection: 'row'}}>
      <Image
        source={require('../logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={{justifyContent:'center'}}>
      <Text style={styles.headerTitle}>The Special School</Text>
      </View>
      </View>
      <View style={styles.rightIconsContainer}>
        <TouchableOpacity>
        <Ionicons name="search" size={24} color="black" style={styles.iconMargin} />
        </TouchableOpacity>
        <TouchableOpacity >
        <Ionicons name="person" size={24} color="black" style={{borderRadius: 54}}/>
        </TouchableOpacity>
      </View>
      </View>
      <View style={{width:screenWidth}}>
      <BelowHeaderComponent />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop:27,
    // paddingBottom: 10,
    // flexDirection: 'row',

    // paddingHorizontal: 16,
    height: 130,
    paddingBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#00C4FF',
    zIndex: 2,
    
    elevation: 10, // If you want a shadow effect on Android
  },
  headerTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  rightIconsContainer: {
    flexDirection: 'row',
  },
  iconMargin: {
    marginRight: 16,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 10,
  },
});

export default HeaderComponent;
