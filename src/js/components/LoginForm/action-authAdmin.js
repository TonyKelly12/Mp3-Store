
    export const submitAction = (data) => {
       console.log('submitAction ' + data)
        return {
            type: "REQUEST_LOGIN", //can named anything you want
            data,//returns the single user object
        }
    };

    export const setActiveAdmin = (payload) => {
        console.log('setActiveAdmin '+ payload)
         return {
             type: "SET_ACTIVE_ADMIN", //can named anything you want
             payload,//returns the single user object
         }
     };

     export const logout = () => {
       console.log('logout running')
       return {
        type: "REQUEST_LOGOUT",
        
        //can named anything you want
        //returns the single user object
    }
     };

     export const uploadAction = (data) => {
        console.log('uploadAction ' + data)
         return {
             type: "REQUEST_UPLOAD", //can named anything you want
             data,//returns the single user object
         }
     };