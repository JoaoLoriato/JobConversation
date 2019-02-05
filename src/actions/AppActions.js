import firebase from 'firebase';
import b64 from 'base-64';
import {MODIFY_ADD_CONTACT_EMAIL, ADD_CONTACT_ERRO, ADD_CONTACT_SUCESSO, LIST_CONTACT_USER, MODIFY_MESSAGE} from './types';
import _ from 'lodash';

export const modifyAddContactEmail = texto => {
    
    return {
        type: MODIFY_ADD_CONTACT_EMAIL,
        payload: texto
    }
}

export const addContact = email => {
    
    return dispatch => {
    let emailB64 = b64.encode(email);

    firebase.database().ref(`/contatos/${emailB64}`)
        .once('value')
        .then(snapshot => {
            if(snapshot.val()){
                //email do contato que será adicionado
                const dadosUsuario = _.first(_.values(snapshot.val()));
                console.log(dadosUsuario);

                //email do usuário autenticado que deseja adicionar outro email
                const {currentUser} = firebase.auth();
                let emailUsuarioB64 = b64.encode(currentUser.email);

                firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
                .push({email, nome: dadosUsuario.nome })
                .then(() => addContactSucesso(dispatch))
                .catch(erro => addContactErro(erro.message, dispatch))
            }
            else{
                dispatch(
                    {
                        type: ADD_CONTACT_ERRO,
                        payload: 'E-mail informado não corresponde a um usuário válido!'
                    }
                )
            }
        })

    }

}

const addContactErro = (erro, dispatch) => (
    dispatch (
        {
            type: ADD_CONTACT_ERRO,
            payload: erro
        }
    )
)

const addContactSucesso = dispatch => (
    dispatch (
        {
            type: ADD_CONTACT_SUCESSO,
            payload: true
        }
    )
)

export const enableInclusionContact = () => (
    {
        type: ADD_CONTACT_SUCESSO,
        payload: false
    }
)

export const contactUserFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        let emailUsuarioB64 = b64.encode( currentUser.email );

        firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
            .on("value", snapshot => {
                dispatch({ type: LIST_CONTACT_USER, payload: snapshot.val() })
            })
    }
}

export const modifyMessage = texto => {
    return ({
        type: MODIFY_MESSAGE,
        payload: texto
    })
}

export const sendMessage = (message, contactName, contactEmail) => {
    return ({
        type: 'xyz'
    })
}