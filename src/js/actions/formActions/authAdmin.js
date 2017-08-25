export const authAdmin = (admin) => {
    console.log(" Auth-n the admin " +  admin);
    return {
        type: "ADMIN_AUTH", //can named anything you want
        payload: admin //returns the single user object
    }
};