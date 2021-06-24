import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

import { View, Text } from 'react-native';
import firebase from 'firebase/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';
const store = createStore(rootReducer,applyMiddleware(thunk))

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
import MainScreen from './components/Main'


const Stack = createStackNavigator();

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if(!user){
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      }else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })  
      }
    })
  }
  render() {
    const { loggedIn, loaded } = this.state;

    if (!loaded) {
      return(
        <View style={{ flex: 1, justifyContent: 'center'}}>
          <Text>Loading</Text>
        </View>
      )
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false}} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
        </NavigationContainer>
      );
    }    

    return(
      <Provider store={store}>
        <MainScreen/>
      </Provider>
    )
  }
}

export default App

