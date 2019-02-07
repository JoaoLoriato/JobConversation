import React, {Component} from 'react';
import {View, Text, ListView, TouchableHighlight} from 'react-native';
import { chatsUserFetch, contactUserFetch } from '../actions/AppActions';
import {connect} from 'react-redux';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';

class Chats extends Component {

    componentWillMount(){
        this.props.chatsUserFetch()
        this.createDataSource(this.props.chats)
    }
    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps.chats)

    }

    createDataSource(chats){
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
        this.dataSource = ds.cloneWithRows(chats)
    }
    renderRow(chat){
        return(
            <TouchableHighlight onPress={
                () => Actions.chat({title: chat.name, contactName: chat.name, contactEmail: chat.email})
            }>
            <View style={{flex: 1, padding: 20, borderBottomWidth: 1, borderColor: "#ccc"}}>
                <Text style={{fontSize: 25}}>{chat.name}</Text>
            </View>
            </TouchableHighlight>
        )
    } 

    render(){
        return(
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        )
    }
}

mapStateToProps = state => {
    const chats = _.map(state.ListChatsReducer, (val, uid) => {
        return {...val, uid};
    });
    return {
        chats
    }
}

export default connect(mapStateToProps, {chatsUserFetch})(Chats)