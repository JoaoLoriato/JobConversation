import {MODIFY_ADD_CONTACT_EMAIL} from './types';

export const modifyAddContactEmail = texto => {
    
    return {
        type: MODIFY_ADD_CONTACT_EMAIL,
        payload: texto
    }
}

export const addContact = email => {
    return {
        type: ''
    }
}