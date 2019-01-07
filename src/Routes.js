import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import Welcome from './components/Welcome';
export default props => (
    <Router>
        <Stack key="root">
        <Scene key='formLogin' component={FormLogin} title="Login"/>
        <Scene key='formCadastro' component={FormCadastro} title="Cadastro"/>
        <Scene key='welcome' component={Welcome} title="Welcome" initial/>
        </Stack> 
    </Router>
);