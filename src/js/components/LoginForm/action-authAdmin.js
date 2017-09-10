
    export const submitAction = (data) => {
       console.log(data)
        return {
            type: "REQUEST_LOGIN", //can named anything you want
            data,//returns the single user object
        }
    };

    export const setActiveAdmin = (payload) => {
        console.log(payload)
         return {
             type: "SET_ACTIVE_ADMIN", //can named anything you want
             payload,//returns the single user object
         }
     };

     export const logout = () => {
       
         return {
             type: "REQUEST_LOGOUT", //can named anything you want
             //returns the single user object
         }
     };