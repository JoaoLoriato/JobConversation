import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {modifyMessage} from '../actions/AppActions'

class Chat extends Component {
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
                    <TouchableHighlight onPress={() => false} underlayColor="#fff">
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

export default connect(mapStateToProps, {modifyMessage})(Chat)