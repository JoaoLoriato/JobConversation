import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {contactUserFetch} from '../actions/AppActions';

class Contacts extends Component {

    componentWillMount(){
        this.props.contactUserFetch();
    }


    render(){
        return(
            <View>
                <Text>Contacts</Text>
            </View>
        )
    }
    
}

export default connect(null, {contactUserFetch})(Contacts);