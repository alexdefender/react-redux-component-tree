import { combineReducers } from 'redux';
import aReducer from './aReducer';
import cReducer from './cReducer';
import eReducer from './eReducer';
import fReducer from './fReducer';
import ceReducer from './ceReducer';

export const rootReducer = combineReducers({
    aReducer,
    cReducer,
    eReducer,
    fReducer,
    // ceReducer
});
