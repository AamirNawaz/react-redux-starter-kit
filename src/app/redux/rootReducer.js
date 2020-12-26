
import { combineReducers } from 'redux';
import shopeReducer from './shope/shope-reducer';

const rootReducer = combineReducers({
    shope: shopeReducer
});

export default rootReducer;