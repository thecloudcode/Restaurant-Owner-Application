import React,{useState, useEffect} from 'react';
import { ScrollView, Text, View, StyleSheet , TouchableOpacity} from 'react-native';

import { Amplify, Storage } from 'aws-amplify';
import awsconfig from './../src/aws-exports';

Amplify.configure(awsconfig);
// const notifications = [
//   {
//     id: 1,
//     title: 'New Message',
//     message: 'You have a new message from John Doe.',
//     time: '2 hours ago',
//   },
//   {
//     id: 2,
//     title: 'Check Feedbacks',
//     message: 'Reminder: Check your customer Feedbacks',
//     time: '1 day ago',
//   },
//   {
//     id: 3,
//     title: 'Payment Received',
//     message: 'You received a payment of $100.',
//     time: '3 days ago',
//   },
//   // Add more notifications here
// ];

const App = ({navigation}) => {

  const [notifications, setnotifications] = useState([]);
  useEffect(() => {
    fetchJsonFromS3();
  }, []);

  const fetchJsonFromS3 = async () => {
    try {
      const url = await Storage.get(`profile4/notifications.json`, { level: 'public' });
      // const shop = await Storage.get(`profile4/openorclosed.json`, { level: 'public' });
      console.log('URL:', url);
  
      if (url) {
        const response = await fetch(url);
        
        if (response.status === 404) {
          setnotifications([]); // Set notifications as an empty array if the file is not found
        } else {
          const jsonData = await response.json();
          setnotifications(jsonData);
          console.log(jsonData);
        }
      } else {
        setnotifications(null); // Set notifications as null if the URL is not available
      }

      // if (shop){
      //   const response2 = await fetch(shop);
      //   if (response2.status === 404){
      //     setIsEnabled(false);
      //   }else{
      //     const data = await response2.json();
      //     setIsEnabled(data);
      //     console.log(data);
      //   }
      // }
    } catch (error) {
      console.error('Error fetching shop JSON data from S3:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Notifications</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
  {notifications.slice().reverse().map(notification => (
    <NotificationItem key={notification.id} notification={notification} />
  ))}
</ScrollView>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{height: 50,width: 370, padding: 10, backgroundColor: 'black', borderRadius: 10, justifyContent: 'center', alignItems: 'center', elevation: 4, marginTop: 10}}>
        <Text style={{color: 'white', fontWeight:'bold'}}>Go Back</Text>
    </TouchableOpacity>
    </View>
  );
};

const NotificationItem = ({ notification, navigation }) => (
  <View style={styles.notificationItem}>
    <Text style={styles.notificationTitle}>{notification.title}</Text>
    <Text style={styles.notificationMessage}>{notification.message}</Text>
    <Text style={styles.notificationTime}>{notification.time}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 17,
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  notificationItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  notificationMessage: {
    fontSize: 16,
    marginBottom: 10,
  },
  notificationTime: {
    fontSize: 12,
    color: 'gray',
  },
});

export default App;
