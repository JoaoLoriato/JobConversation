import {MODIFY_ADD_CONTACT_EMAIL} from '../actions/types';

const INITIAL_STATE = {
    add_contact_email: ''
};

export default (state = INITIAL_STATE, action) => {

    switch(action.type){
        case MODIFY_ADD_CONTACT_EMAIL:
            return {...state, add_contact_email: action.payload}
        default:
            return state;
    }
}