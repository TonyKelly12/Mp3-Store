const initialState =null;

export default function (state = initialState, action){
    switch(action.type){
        case "AUTH_ADMIN":
        console.log('auth_admin ' + action.payload)
            return action.payload;
            

        case "LOGOUT_ADMIN":
        console.log('logout_admin ' + action.payload)
        return Object.assign({}, state.admin.admin, {
            isAuthenticated: false
          })
    
    }
    return state; //Returns ActiveAdmin
} 