import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableHighlight, ListView} from 'react-native';
import _ from 'lodash';
import {connect} from 'react-redux';
import {modifyMessage, sendMessage, chatUserFetch} from '../actions/AppActions'

class Chat extends Component {

    componentWillMount(){
        this.props.chatUserFetch(this.props.contactEmail)
        this.createDataSource(this.props.chat);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps.chat);
    }

    createDataSource(chat){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.dataSource = ds.cloneWithRows(chat);
    }

    _sendMessage(){
        const {message, contactName, contactEmail} = this.props;

        this.props.sendMessage(message, contactName, contactEmail)
    }

    renderRow(text){
        return (
            <View>
                <Text>{text.message}</Text>
                <Text>{text.type}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={{flex:1, marginTop: 50, backgroundColor: '#eee4dc', padding: 10}}>
                <View style={{flex: 1, paddingBottom: 20}}>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
                    
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
    
    const chat = _.map(state.ListChatReducer, (val, uid) => {
        return { ...val, uid};
    });
    
    return({
        chat: chat,
        message: state.AppReducer.message
    })
}

export default connect(mapStateToProps, {modifyMessage, sendMessage, chatUserFetch})(Chat)