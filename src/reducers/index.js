import {combineReducers} from 'redux';
import AutenticacaoReducer from './AutenticacaoReducer';
import AppReducer from './AppReducer';
import ListContactsReducer from './ListContactsReducer';

export default combineReducers({
    AutenticacaoReducer: AutenticacaoReducer,
    AppReducer: AppReducer,
    ListContactsReducer: ListContactsReducer
});