export default function (state = null, action){
    switch(action.type){
        case "AUTH_ADMIN":
        console.log(action.payload)
            return action.payload;
            break;
        
    }
    return state; //Returns ActiveAdmin
} 