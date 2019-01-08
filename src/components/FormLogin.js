import React, {Component} from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, ImageBackground, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { connect } from 'react-redux';
import {modificaEmail, modificaSenha, autenticarUsuario} from '../actions/AutenticacaoActions';

class formLogin extends Component {
    _autenticarUsuario() {
        const {email, senha} = this.props;

        this.props.autenticarUsuario({email, senha});
    }
    render(){
    return(
        <ImageBackground style={{flex: 1, width: null}} source={require('../imgs/bg.png')}>
    <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 25, color: '#fff' }}>Job Conversations</Text>
        </View>
        <View style={{ flex: 2 }}>
            <TextInput 
            value={this.props.email} 
            style={{ fontSize: 20, height: 45, color:'#fff' }} 
            placeholder='Email' 
            placeholderTextColor='#fff' 
            onChangeText={texto => this.props.modificaEmail(texto)} />
            <TextInput 
            secureTextEntry={true} 
            value={this.props.senha} 
            style={{ fontSize: 20, height: 45, color:'#fff', borderColor:'gray' }} 
            placeholder='Senha' 
            placeholderTextColor='#fff' 
            onChangeText={texto => this.props.modificaSenha(texto)} />
            <TouchableHighlight 
            onPress={() => Actions.formCadastro()}>
            <Text 
            style={{ fontSize: 20, color:'#fff' }}>Ainda não tem cadastro? Cadastre aqui</Text>
            </TouchableHighlight>
        </View>
        <View style={{ flex: 2 }}>
            <Button 
            title="Acessar" 
            color='#CD853F' 
            onPress={() => this._autenticarUsuario} />
        </View>
    </View>
    </ImageBackground>
  );
    }
}

const mapStateToProps = state => (

    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }

)

export default connect(mapStateToProps, {modificaEmail, modificaSenha, autenticarUsuario})(formLogin);