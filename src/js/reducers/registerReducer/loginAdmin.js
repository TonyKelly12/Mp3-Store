export default function (state = null, action){
    switch(action.type){
        case "LOGIN_ADMIN":
            return Object.assign({}, state,{
                addingAdmin:false,
                admins:[
                    ...state.admin,
                    action.admin,
                ]
            })
            default:
                return state;
        
    }
  
}