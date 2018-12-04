import {createStore, combineReducers} from 'redux';
import Reducers from './Reducers';

let Store = createStore(combineReducers(Reducers));

export default Store;
