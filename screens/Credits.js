import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TheSpecialFoodScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Euphelity</Text>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{height: 50,width: 370, padding: 10, backgroundColor: 'black', borderRadius: 10, justifyContent: 'center', alignItems: 'center', elevation: 4, marginVertical: 20, marginHorizontal: 20}}>
        <Text style={{color: 'white', fontWeight:'bold'}}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
  title: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default TheSpecialFoodScreen;
