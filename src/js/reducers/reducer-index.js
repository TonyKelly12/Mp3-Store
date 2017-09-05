import {combineReducers} from 'redux';
import {reducer as formReducer } from 'redux-form';
import UserReducer from './userReducers/reducer-users';
import ActiveUserReducer from './userReducers/reducer-active-user';
import activeAdmin from './loginReducer/auth-admin-reducer';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';


const allReducers = combineReducers ({
    users: UserReducer,
    activeUser: ActiveUserReducer,
    form: formReducer,
    activeAdmin: activeAdmin,
    router: routerReducer
});

export default allReducers;