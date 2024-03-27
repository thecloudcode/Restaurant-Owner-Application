// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
// import Home from './screens/home';
// import Lessons from './screens/English Lessons';
// import Subjects from './screens/Subjects';
// import FourOptions from './screens/InsideEachSubject';
// // import Subjects from './screens/games';
// import Games from './screens/games';
// import Quiz from './screens/Quiz';
// // import SignInScreen from './screens/Sign In';
// import Check from './screens/check';
// import Check2 from './screens/check2';

// the is the main stack with all navigations
import SignedInStack from './navigation';
// import SignInScreen from './screens/Sign Up';
// import VerificationScreen from './screens/OTP';
// import Password from './screens/ConfirmPassword';
// import ImagePickerScreen from './screens/Upload Image';
// import ResInfo from './screens/RestaurantInfo';

export default function App() {
  return (
    <View style={styles.container}>
      <SignedInStack/>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
