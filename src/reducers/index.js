import { combineReducers } from 'redux';
import {userData} from './userData';

/*
    The combineReducers helper function turns an object whose values are different
    reducing functions into a single reducing function that you can pass it to createStore.

    in this is case we have one reducer userData we passed to the store under userDATA name
 */
export default combineReducers({
    userData
});