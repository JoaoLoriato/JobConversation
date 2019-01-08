import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import Welcome from './components/Welcome';
import Main from './components/Main'
export default props => (
    <Router navigationBarStyle ={{backgroundColor: '#CD853F'}} titleStyle={{color: '#fff'}}>
        <Stack key="root">
        <Scene key='formLogin' component={FormLogin} title="Login" hideNavBar={true}/>
        <Scene key='formCadastro' component={FormCadastro} title="Cadastro" hideNavBar={false}/>
        <Scene key='welcome' component={Welcome} title="Welcome" hideNavBar={true}/>
        <Scene key='main' component={Main} title="Main" hideNavBar={true}/>
        </Stack> 
    </Router>
);