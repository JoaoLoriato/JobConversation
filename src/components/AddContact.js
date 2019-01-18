import React from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {connect} from 'react-redux';
import {modifyAddContactEmail, addContact} from '../actions/AppActions';

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
        <Button title="Add" color="#CD853F" onPress={() => props.addContact(props.add_contact_email)}/>
        <Text style={{color: '#ff0000', fontSize: 20}}>
            {props.cadastro_result_txt_erro}

        </Text>
    </View>
    </View>
);

const mapStateToProps = state => (
    {
        add_contact_email: state.AppReducer.add_contact_email,
        cadastro_result_txt_erro: state.AppReducer.cadastro_result_txt_erro
    }
);

export default connect(mapStateToProps, {modifyAddContactEmail, addContact})(AddContact);