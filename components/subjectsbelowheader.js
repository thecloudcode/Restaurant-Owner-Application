import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';


const BelowHeaderComponent = ({navigation}) => {
//   const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>

            <TouchableOpacity style={styles.boxstyle}>
            <Icon name="angle-left" size={18} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxstyle}><Text>All</Text></TouchableOpacity>
            <TouchableOpacity style={styles.boxstyle}><Text>Hindi</Text></TouchableOpacity>
            <TouchableOpacity style={styles.boxstyle}><Text>Mathematics</Text></TouchableOpacity>
            <TouchableOpacity style={styles.boxstyle}><Text>English</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    // marginTop: -5,
    // paddingTop:27,
    // paddingBottom: 10,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 70,
    // backgroundColor: '#00C4FF',
    paddingBottom: 10,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    // elevation: 20, // If you want a shadow effect on Android
    zIndex: 1,
  },
  boxstyle: {
    paddingVertical:7, paddingHorizontal: 16, borderRadius: 7, backgroundColor: 'white',marginRight: 5,elevation: 10,
  },
  headerTitle: {
    fontSize: 18,
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
    marginRight: 10,
  },
});

export default BelowHeaderComponent;
