
    export const submitAction = (data) => {
       console.log(data)
        return {
            type: "REQUEST_LOGIN", //can named anything you want
            data,//returns the single user object
        }
    };