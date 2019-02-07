import React, {Component} from 'react';
import { View, 
    Text, 
    TextInput, 
    Button, 
    TouchableHighlight, 
    ImageBackground, 
    Image,
    ActivityIndicator,
    } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { connect } from 'react-redux';
import {modificaEmail, modificaSenha, autenticarUsuario} from '../actions/AutenticacaoActions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class formLogin extends Component {
    _autenticarUsuario() {
        const {email, senha} = this.props;

        this.props.autenticarUsuario({email, senha});
    }
    renderBtnAcessar(){
        if(this.props.loading_login){
            return (
                <ActivityIndicator size="large"/>
            )
        }
        return(
            <Button 
            title="Acessar" 
            color='#CD853F' 
            onPress={() => this._autenticarUsuario()} />
        )
    }
    
    render(){
        return(
            <ImageBackground style={{flex: 1, width: null}} source={require('../imgs/bg.png')}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, color: '#fff' }}>Work Conversations</Text>
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
                        <Text 
                        style={{color: '#ff0000', fontSize: 18}}>
                            {this.props.erroLogin}
                        </Text>
                        <TouchableHighlight 
                        onPress={() => Actions.formCadastro()}>
                        <Text 
                        style={{ fontSize: 20, color:'#fff' }}>Ainda não tem cadastro? Cadastre aqui</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{ flex: 2 }}>
                        {this.renderBtnAcessar()}
                    </View>
                </View>
            </ImageBackground>   
        );
    }
}

const mapStateToProps = state => (

    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loading_login: state.AutenticacaoReducer.loading_login
    }

)

export default connect(mapStateToProps, {modificaEmail, modificaSenha, autenticarUsuario})(formLogin);