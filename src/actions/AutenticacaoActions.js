import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import b64 from 'base-64';

export const modificaEmail = (texto) => {
    return {
        type: 'modifica_email',
        payload: texto

    }
}

export const modificaSenha = (texto) => {
    return {
        type: 'modifica_senha',
        payload: texto
    }
}

export const modificaNome = (texto) => {
    return {
        type: 'modifica_nome',
        payload: texto
    }
}

export const cadastraUsuario = ({nome, email, senha}) => {

    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user => { 
                let emailB64 =b64.encode(email);
                firebase.database().ref(`/contatos/${+emailB64}`)
                .push({nome})
                .then(value => cadastroUsuarioSucesso(dispatch))
            })
            .catch(erro => cadastrousuarioErro(erro, dispatch));
    }

}

const cadastroUsuarioSucesso = (dispatch) => {
    dispatch( {type: 'cadastro_usuario_sucesso'} );
    Actions.welcome();
}

const cadastrousuarioErro = (erro, dispatch) => {
    dispatch( { type: 'cadastro_usuario_erro', payload: erro.message } );
}

export const autenticarUsuario = ({email, senha}) => {
    console.log(email);
    console.log(senha);
    return {
        type: 'teste'
    }
}