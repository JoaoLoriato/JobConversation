import {MODIFY_ADD_CONTACT_EMAIL, ADD_CONTACT_ERRO} from '../actions/types';

const INITIAL_STATE = {
    add_contact_email: '',
    cadastro_result_txt_erro: ''
};

export default (state = INITIAL_STATE, action) => {

    switch(action.type){
        case MODIFY_ADD_CONTACT_EMAIL:
            return {...state, add_contact_email: action.payload}
        case ADD_CONTACT_ERRO:
            return {...state, cadastro_result_txt_erro: action.payload}
        default:
            return state;
    }
}