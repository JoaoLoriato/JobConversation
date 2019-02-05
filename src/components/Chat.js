import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {modifyMessage, sendMessage} from '../actions/AppActions'

class Chat extends Component {

    _sendMessage(){
        const {message, contactName, contactEmail} = this.props;

        this.props.sendMessage(message, contactName, contactEmail)
    }

    render() {
        return (
            <View style={{flex:1, marginTop: 50, backgroundColor: '#eee4dc', padding: 10}}>
                <View style={{flex: 1, paddingBottom: 20}}>
                    
                </View>
                <View style={{flexDirection: 'row', height: 60}}>
                    <TextInput
                        value={this.props.message}
                        onChangeText={texto => this.props.modifyMessage(texto)}
                        style={{flex: 4, backgroundColor: '#fff', fontSize: 18}}
                    />
                    <TouchableHighlight onPress={this._sendMessage.bind(this)} underlayColor="#fff">
                        <Image source={require('../imgs/icon-send.png')} />
                    </TouchableHighlight>

                </View>
            </View>
        )
    }
}

mapStateToProps = state => {
    return({
        message: state.AppReducer.message
    })
}

export default connect(mapStateToProps, {modifyMessage, sendMessage})(Chat)