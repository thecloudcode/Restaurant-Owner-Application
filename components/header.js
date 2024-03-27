import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HeaderComponent = ({navigation}) => {
//   const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      {/* <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="ios-arrow-back" size={24} color="black" />
      </TouchableOpacity> */}
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
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop:27,
    // paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 90,
    paddingBottom: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: 'white',
    zIndex: 2,
    
    elevation: 10, // If you want a shadow effect on Android
  },
  headerTitle: {
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
