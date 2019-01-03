import React, {Component} from 'react';
import { View, TextInput, Button, Image, ImageBackground } from 'react-native';
import {connect} from 'react-redux';
import {
    modificaEmail, 
    modificaSenha, 
    modificaNome, 
    cadastraUsuario
} from '../actions/AutenticacaoActions';

class formCadastro extends Component {
    
    _cadastraUsuario(){

        const { nome, email, senha} = this.props;
        this.props.cadastraUsuario({nome, email, senha});
    }

    render(){
return (
    <ImageBackground style={{flex: 1, width: null}} source={require('../imgs/bg.png')}>
    <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 4, justifyContent: 'center' }}>
            <TextInput 
            value={this.props.nome} 
            placeholder="Nome" 
            style={{ fontSize: 20, height: 45, color:'#fff' }} 
            placeholderTextColor='#fff' 
            onChangeText={texto => this.props.modificaNome(texto)} 
            />
            <TextInput 
            value={this.props.email} 
            placeholder="E-mail" 
            style={{ fontSize: 20, height: 45, color:'#fff'}} 
            placeholderTextColor='#fff' 
            onChangeText={texto => this.props.modificaEmail(texto)} 
            />
            <TextInput secureTextEntry={true} 
            value={this.props.senha} 
            placeholder="Senha" 
            style={{ fontSize: 20, height: 45, color:'#fff'}} 
            placeholderTextColor='#fff' 
            onChangeText={texto => this.props.modificaSenha(texto)} 
            />
        </View>
        <View style={{ flex: 1 }}>
            <Button 
            title="Cadastrar" 
            color="#CD853F" 
            onPress={() => this._cadastraUsuario()} 
            />
        </View>
    </View>
    </ImageBackground>
);
}
}

const mapStateToProps = state => {
    console.log(state);

    return(
        {
            nome:state.AutenticacaoReducer.nome,
            email: state.AutenticacaoReducer.email,
            senha: state.AutenticacaoReducer.senha
        }
    );
}

export default connect(
    mapStateToProps, {
        modificaEmail, 
        modificaSenha, 
        modificaNome,
        cadastraUsuario
    })(formCadastro);