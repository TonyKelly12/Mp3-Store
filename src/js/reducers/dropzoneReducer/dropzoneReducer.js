const initialState =null;

export default function (state = initialState, action){
    switch(action.type){
        case "UPLOAD_SONG":
        console.log('Upload' + action.payload)
            return action.payload;
            

    
    }
    return state; //Returns ActiveAdmin
} 