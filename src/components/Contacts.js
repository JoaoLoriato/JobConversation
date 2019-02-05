import React, {Component} from 'react';
import {View, Text, ListView, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash'
import {Actions} from 'react-native-router-flux';
import {contactUserFetch} from '../actions/AppActions';


class Contacts extends Component {

    componentWillMount(){
        this.props.contactUserFetch();
        this.createDataOfSource(this.props.contacts)
    }

    componentWillReceiveProps(nextProps){
        this.createDataOfSource(nextProps.contacts)
    }

    createDataOfSource(contacts){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.dataSource = ds.cloneWithRows(contacts)
    }

    renderRow(contact)
{
    return (
        <TouchableHighlight
            onPress={() => Actions.chat()}
        >
        <View style={{flex: 1, padding: 20, borderBottomWidth: 1, borderColor: "#CCC" }}>
            <Text style={{fontSize: 25}}>{contact.nome}</Text>
            <Text style={{fontSize: 18}}>{contact.email}</Text>
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
    const contacts = _.map(state.ListContactsReducer, (val, uid) => {
        return { ...val, uid}
    })
    return {
        contacts
    }
}

export default connect(mapStateToProps, {contactUserFetch})(Contacts);