import React from 'react';
import {View, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import {modifyAddContactEmail} from '../actions/AppActions';

const AddContact = props => (

    <View style={{flex: 1, justifyContent: 'center', padding: 20}}>
    <View style={{ flex: 1, justifyContent: 'center'}}>
        <TextInput
        placeholder='E-mail'
        style={{fontSize: 20, height: 45}}
        onChangeText={(texto) => props.modifyAddContactEmail(texto)}
        value={props.add_contact_email}
        />
    </View>
    <View style={{flex: 1}}>
        <Button title="Add" color="#CD853F" onPress={() => false}/>
    </View>
    </View>
);

const mapStateToProps = state => (
    {
        add_contact_email: state.AppReducer.add_contact_email
    }
);

export default connect(mapStateToProps, {modifyAddContactEmail})(AddContact);