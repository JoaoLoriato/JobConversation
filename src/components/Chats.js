import React, {Component} from 'react';
import {View, Text, ListView} from 'react-native';
import { chatsUserFetch } from '../actions/AppActions';
import {connect} from 'react-redux';
import _ from 'lodash';

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
            <View style={{flex: 1, padding: 20, borderBottomWidth: 1, borderColor: "#ccc"}}>
                <Text style={{fontSize: 25}}>{chat.name}</Text>
            </View>
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