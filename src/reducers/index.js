import {combineReducers} from 'redux';
import AutenticacaoReducer from './AutenticacaoReducer';
import AppReducer from './AppReducer';
import ListContactsReducer from './ListContactsReducer';
import ListChatReducer from './ListChatReducer';

export default combineReducers({
    AutenticacaoReducer: AutenticacaoReducer,
    AppReducer: AppReducer,
    ListContactsReducer: ListContactsReducer,
    ListChatReducer: ListChatReducer
});