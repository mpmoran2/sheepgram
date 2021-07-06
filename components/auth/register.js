import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'
import firebase from 'firebase/app'
require('firebase/auth')
require("firebase/firestore")
export class register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: ''
        }
        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp(){
        const {  email, password, username } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            firebase.firestore().collection("user")
                .doc(firebase.auth().currentUser.uid)
                .set({
                    username,
                    email
                })
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        });
    }
    render() {
        return (
            <View style={{justifyContent: 'center'}}>
                <TextInput 
                    placeholder="E-Mail"
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput
                    placeholder="Username"
                    onChangeText={(username) => this.setState({ username })}
                />
                <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />
                <Button
                    onPress={() => this.onSignUp()}
                    title="Sign Up"
                />
            </View>
        )
    }
}

export default register
