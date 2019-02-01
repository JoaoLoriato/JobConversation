import React, {Component} from 'react';
import {View, Text, ListView} from 'react-native';
import {connect} from 'react-redux';
import {contactUserFetch} from '../actions/AppActions';
import _ from 'lodash';

class Contacts extends Component {

    constructor(props){
        super(props)

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

        this.state = {dataOfSource: ds.cloneWithRows([
            'Registro 1',
            'Registro 2',
            'Registro 3',
            'Registro 4'

        ])}
    }


    componentWillMount(){
        this.props.contactUserFetch();
        console.log('recuperada via props: ', this.props.contacts);
    }

    componentWillReceiveProps(nextProps){
        console.log('recuperando via props pós update', nextProps.contacts);
    }


    render(){
        return(
            <ListView
                dataSource={this.state.dataOfSource}
                renderRow={data => <View><Text>{data}</Text></View>}
            />
        )
    }
    
}

mapStateToProps = state => {
    const contacts = _.map(state.ListContactsReducer, (val, uid) => {
        return {...val, uid}
    })
    return {
        contacts: contacts
    }
}

export default connect(null, {contactUserFetch})(Contacts);