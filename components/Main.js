import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/actions/index'


export class Main extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render() {
        const { currentUser } = this.props;

        console.log()
        
        if(currentUser==undefined){
            return(
                <View></View>
            )
        }
        return (
            <View style={{ flex: 2, justifyContent: 'center'}}>
                    <Text>{currentUser.username} is Logged In. Welcome to the Flock!</Text>
            </View>           
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser:store.userState.currentUser
})

const mapDispatchToProps = (dispatch) => bindActionCreators({fetchUser}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Main);
