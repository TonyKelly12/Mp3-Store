import {combineReducers} from 'redux';
import UserReducer from './userReducers/reducer-users';
import ActiveUserReducer from './userReducers/reducer-active-user'

const allReducers = combineReducers ({
    Users: UserReducer,
    ActiveUser: ActiveUserReducer,

});

export default allReducers;