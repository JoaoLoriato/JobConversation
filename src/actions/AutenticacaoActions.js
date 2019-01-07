import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
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
            .then(user => cadastroUsuarioSucesso(dispatch))
            .catch(erro => cadastrousuarioErro(erro, dispatch));
    }

}

const cadastroUsuarioSucesso = (dispatch) => {
    dispatch( {type: 'sucesso'} );
    Actions.welcome();
}

const cadastrousuarioErro = (erro, dispatch) => {
    dispatch( { type: 'cadastro_usuario_erro', payload: erro.message } );
}