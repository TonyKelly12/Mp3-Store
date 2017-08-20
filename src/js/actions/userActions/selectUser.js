export const selectUser = (user) => {
    console.log(" you clicked on user: ", user.first);
    return {
        type: "USER_SELECTED", //can named anything you want
        payload: user //returns the single user object
    }
};