import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'
import firebase from 'firebase/app'
require('firebase/auth')
export class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignIn(){
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
        
        //     firebase.auth().setPersistence(firebase.auth.Auth.Persistence.none)
        //     .then(() => {
        //     // Existing and future Auth states are now persisted in the current
        //     // session only. Closing the window would clear any existing state even
        //     // if a user forgets to sign out.
        //     // ...
        //     // New sign-in will be persisted with session persistence.
        //     return firebase.auth().signInWithEmailAndPassword(email, password);
        //     })
        //     .catch((error) => {
        //     // Handle Errors here.
        //      var errorCode = error.code;
        //      var errorMessage = error.message;
        //      });
    }
    render() {
        return (
            <View style={{justifyContent: 'center'}}>
                <TextInput 
                    placeholder="E-Mail"
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />
                <Button
                    onPress={() => this.onSignIn()}
                    title="Sign In"
                />
            </View>
        )
    }
}

export default login