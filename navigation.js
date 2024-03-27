import { View, Text, ActivityIndicator } from 'react-native'
import React, {useState, useEffect}from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as SecureStore from 'expo-secure-store';

import Home from './screens/home';
// import English from './screens/English Lessons';
// import Hindi from './screens/Hindi Lessons';
// import Mathematics from './screens/Mathematics Lessons';
import Subjects from './screens/Subjects';
// import FourOptions from './screens/InsideEachSubject';
// import Subjects from './screens/games';
import Games from './screens/games';
import Quiz from './screens/Quiz';
import AddItemScreen from './screens/AddIteminMenu';
import Stats from './screens/stats';
import WeekStats from './screens/weekstats';
import Menu from './screens/Menu';
import Notifications from './screens/Notifications';
import Profile from './screens/Profile';
import About from './screens/About';
import Credits from './screens/Credits';
import OTP from './screens/OTP';
import SignUp from './screens/Sign Up';
import ResInfo from './screens/RestaurantInfo';
// import ImagePickerScreen from './screens/Upload Image';
import Feedback from './screens/Feedback';
import Ratings from './screens/Rating';
import MostSellingDishes from './screens/MostSellingDishes';

const Stack = createStackNavigator()

const ScreenOptions = {
    headerShown: false
}

const SignedInStack = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    // Check the value in SecureStore and update the isLoggedIn state accordingly
    SecureStore.getItemAsync('login').then((value) => {
      if (value === '1') {
        setIsLoggedIn(true);
        console.log('Login Saved was found!');
        console.log(isLoggedIn);
      } else {
        setIsLoggedIn(false);
        console.log('Login Saved was not found!');
        console.log(isLoggedIn);
      }
    });
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  if (isLoggedIn === null) {
    return (
      <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>

      <NavigationContainer style={{ flex: 1, backgroundColor: 'black' }}>
        {isLoggedIn ? (
          // User is logged in, navigate to Home
          <Stack.Navigator initialRouteName='Home' screenOptions={ScreenOptions}>
            <Stack.Screen name='Home' component={Home}/>
          {/* <Stack.Screen name='English' component={English}/> */}
          {/* <Stack.Screen name='Hindi' component={Hindi}/> */}
          {/* <Stack.Screen name='Mathematics' component={Mathematics}/> */}
          <Stack.Screen name='Subjects' component={Subjects}/>
          {/* <Stack.Screen name='FourOptions' component={FourOptions}/> */}
          <Stack.Screen name='Games' component={Games}/>
          <Stack.Screen name='Quiz' component={Quiz}/>
          <Stack.Screen name='AddItemInMenu' component={AddItemScreen}/>
          <Stack.Screen name='Stats' component={Stats}/>
          <Stack.Screen name='Menu' component={Menu}/>
          <Stack.Screen name='Notifications' component={Notifications}/>
          <Stack.Screen name='Profile' component={Profile}/>
          <Stack.Screen name='About' component={About}/>
          <Stack.Screen name='Credits' component={Credits}/>
          <Stack.Screen name='OTP' component={OTP}/>
          <Stack.Screen name='SignUp' component={SignUp}/>
          <Stack.Screen name='ResInfo' component={ResInfo}/>
          {/* <Stack.Screen name='UploadImage' component={ImagePickerScreen}/> */}
          <Stack.Screen name='WeekStats' component={WeekStats}/>
          <Stack.Screen name='Feedback' component={Feedback}/>
          <Stack.Screen name='Ratings' component={Ratings}/>
          <Stack.Screen name='MostSellingDishes' component={MostSellingDishes}/>
          </Stack.Navigator>
        ) : (
          // User is not logged in, navigate to SignUp
          <Stack.Navigator initialRouteName='SignUp' screenOptions={ScreenOptions}>
            <Stack.Screen name='Home' component={Home}/>
          {/* <Stack.Screen name='English' component={English}/> */}
          {/* <Stack.Screen name='Hindi' component={Hindi}/> */}
          {/* <Stack.Screen name='Mathematics' component={Mathematics}/> */}
          <Stack.Screen name='Subjects' component={Subjects}/>
          {/* <Stack.Screen name='FourOptions' component={FourOptions}/> */}
          <Stack.Screen name='Games' component={Games}/>
          <Stack.Screen name='Quiz' component={Quiz}/>
          <Stack.Screen name='AddItemInMenu' component={AddItemScreen}/>
          <Stack.Screen name='Stats' component={Stats}/>
          <Stack.Screen name='Menu' component={Menu}/>
          <Stack.Screen name='Notifications' component={Notifications}/>
          <Stack.Screen name='Profile' component={Profile}/>
          <Stack.Screen name='About' component={About}/>
          <Stack.Screen name='Credits' component={Credits}/>
          <Stack.Screen name='OTP' component={OTP}/>
          <Stack.Screen name='SignUp' component={SignUp}/>
          <Stack.Screen name='ResInfo' component={ResInfo}/>
          {/* <Stack.Screen name='UploadImage' component={ImagePickerScreen}/> */}
          <Stack.Screen name='WeekStats' component={WeekStats}/>
          <Stack.Screen name='Feedback' component={Feedback}/>
          <Stack.Screen name='Ratings' component={Ratings}/>
          <Stack.Screen name='MostSellingDishes' component={MostSellingDishes}/>
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </View>
  );
}

export default SignedInStack
