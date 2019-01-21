import React, {Component} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {connect} from 'react-redux';
import {modifyAddContactEmail, addContact} from '../actions/AppActions';

class AddContact extends Component {

    renderAddContact(){
        if(!this.props.cadastro_result_inclusao){
            return (
                <View style={{flex: 1}}>
                    <View style={{ flex: 1, justifyContent: 'center'}}>
                        <TextInput
                        placeholder='E-mail'
                        style={{fontSize: 20, height: 45}}
                        onChangeText={(texto) => this.props.modifyAddContactEmail(texto)}
                        value={this.props.add_contact_email}
                    />
                    </View>
                    <View style={{flex: 1}}>
                    <Button title="Add" color="#CD853F" onPress={() => this.props.addContact(this.props.add_contact_email)}/>
                    <Text style={{color: '#ff0000', fontSize: 20}}>
                    {this.props.cadastro_result_txt_erro}
                    </Text>
                    </View>
                </View>    
        )
    }
        else{
            return (
                <View>
                    <Text style={{fontSize: 20}}>
                        Cadastro realizado com sucesso!
                    </Text>
                </View>
            )

        }
    }
    render ()
    {
        return (
            <View style={{flex: 1, justifyContent: 'center', padding: 20}}>
                {this.renderAddContact()}
            </View>
        )
    }
}

const mapStateToProps = state => (
    {
        add_contact_email: state.AppReducer.add_contact_email,
        cadastro_result_txt_erro: state.AppReducer.cadastro_result_txt_erro,
        cadastro_result_inclusao: state.AppReducer.cadastro_result_inclusao
    }
);

export default connect(mapStateToProps, {modifyAddContactEmail, addContact})(AddContact);