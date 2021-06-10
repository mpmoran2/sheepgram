import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import firebase from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyDk7QvTiIp41mLTs2qkYi2CvYHo8544F50",
  authDomain: "sheepgram-4d568.firebaseapp.com",
  projectId: "sheepgram-4d568",
  storageBucket: "sheepgram-4d568.appspot.com",
  messagingSenderId: "872047423239",
  appId: "1:872047423239:web:adb898f17cd1031e685fa2",
  measurementId: "G-R7JSSNJY35"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/landing'
import RegisterScreen from './components/auth/register'
import LoginScreen from './components/auth/login'


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false}} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
    //   <Text>Bleep Beep Imma Sheep</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
