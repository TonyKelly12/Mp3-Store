export default function (state = null, action){
    switch(action.type){
        case "ADMIN_AUTH":
        console.log(action.payload);
            return action.payload;
            break;
        
    }
    return state; //Returns ActiveAdmin
}