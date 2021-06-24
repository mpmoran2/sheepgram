import { USER_STATE_CHANGE } from '../constants/index';

import firebase from 'firebase/app';
import { SnapshotViewIOS } from 'react-native';
require('firebase/auth')
require("firebase/firestore")


export function fetchUser(){
    return((dispatch) => {
        firebase.firestore()
            .collection("sheep")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                if(snapshot.exists){
                    dispatch({type : USER_STATE_CHANGE, currentUser: snapshot.data()})
                }
                else{
                    console.log('does not exist')
                }
            })
    })

}