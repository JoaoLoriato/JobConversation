import firebase from 'firebase';
import b64 from 'base-64';
import {MODIFY_ADD_CONTACT_EMAIL, ADD_CONTACT_ERRO} from './types';

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
                console.log('User exist');

                //email do contato que irá ser adicionado
                //email

                //email do usuário autenticado que deseja adicionar outro email
                const {currentUser} = firebase.auth();
                let emailUsuarioB64 = b64.encode(currentUser.email);

                firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
                .push({email, nome: 'Nome do Contato' })
                .then(() => console.log('Sucesso'))
                .catch(erro => console.log(erro))
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