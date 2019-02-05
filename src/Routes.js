import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import Welcome from './components/Welcome';
import Main from './components/Main';
import AddContact from './components/AddContact';
import Chat from './components/Chat';

export default props => (
    <Router navigationBarStyle ={{backgroundColor: '#CD853F'}} titleStyle={{color: '#fff'}}>
        <Stack key="root">
        <Scene key='formLogin' component={FormLogin} title="Login" hideNavBar={true}/>
        <Scene key='formCadastro' component={FormCadastro} title="Cadastro" hideNavBar={false}/>
        <Scene key='welcome' component={Welcome} title="Welcome" hideNavBar={true}/>
        <Scene key='main' component={Main} title="Main" hideNavBar={true}/>
        <Scene key='addContact' component={AddContact} title="Add Contact" hideNavBar={false}/>
        <Scene key='chat' component={Chat} title="Chat" hideNavBar={false}/>
        </Stack> 
    </Router>
);