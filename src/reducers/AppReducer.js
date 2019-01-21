import {MODIFY_ADD_CONTACT_EMAIL, ADD_CONTACT_ERRO, ADD_CONTACT_SUCESSO} from '../actions/types';

const INITIAL_STATE = {
    add_contact_email: '',
    cadastro_result_txt_erro: '',
    cadastro_result_inclusao: false
};

export default (state = INITIAL_STATE, action) => {

    switch(action.type){
        case MODIFY_ADD_CONTACT_EMAIL:
            return {...state, add_contact_email: action.payload}
        case ADD_CONTACT_ERRO:
            return {...state, cadastro_result_txt_erro: action.payload}
        case ADD_CONTACT_SUCESSO:
            return {...state, cadastro_result_inclusao: true}
        default:
            return state;
    }
}