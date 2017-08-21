import {combineReducers} from 'redux';
import {reducer as formReducer } from 'redux-form';
import UserReducer from './userReducers/reducer-users';
import ActiveUserReducer from './userReducers/reducer-active-user'

const allReducers = combineReducers ({
    Users: UserReducer,
    ActiveUser: ActiveUserReducer,
    form: formReducer,

});

export default allReducers;