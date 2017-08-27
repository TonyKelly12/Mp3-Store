import {combineReducers} from 'redux';
import {reducer as formReducer } from 'redux-form';
import UserReducer from './userReducers/reducer-users';
import ActiveUserReducer from './userReducers/reducer-active-user'
import activeAdmin from './loginReducer/auth-admin-reducer'
const allReducers = combineReducers ({
    users: UserReducer,
    activeUser: ActiveUserReducer,
    form: formReducer,
    activeAdmin: activeAdmin
});

export default allReducers;