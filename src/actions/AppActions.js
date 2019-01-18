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