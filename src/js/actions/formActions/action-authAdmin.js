
    export const authAdmin = (admin) => {
       console.log(admin)
        return {
            type: "AUTH_ADMIN", //can named anything you want
            payload: admin //returns the single user object
        }
    };