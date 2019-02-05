import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableHighlight} from 'react-native';

export default class Chat extends Component {
    render() {
        return (
            <View style={{flex:1, marginTop: 50, backgroundColor: '#eee4dc', padding: 10}}>
                <View style={{flex: 1, paddingBottom: 20}}>
                    
                </View>
                <View style={{flexDirection: 'row', height: 60}}>
                    <TextInput
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