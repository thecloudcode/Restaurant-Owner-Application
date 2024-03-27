import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'; // Import the hook

const App = () => {
  const navigation = useNavigation(); // Get the navigation object

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Menu</Text>

      <MenuItem title="Profile" navigation={navigation} />
      <MenuItem title="About" navigation={navigation} />
      <MenuItem title="Credits" navigation={navigation} />
      {/* <MenuItem title="Settings" navigation={navigation} /> */}

      <TouchableOpacity onPress={() => navigation.goBack()} style={{height: 50,width: 370, padding: 10, backgroundColor: 'black', borderRadius: 10, justifyContent: 'center', alignItems: 'center', elevation: 4, marginTop: 10}}>
        <Text style={{color: 'white', fontWeight:'bold'}}>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const MenuItem = ({ title, navigation }) => (
  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.push(title)}>
    <Text style={styles.menuItemTitle}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  menuItemTitle: {
    fontSize: 17,
    fontWeight:'bold'
  },
});

export default App;
