export const uploadAction = (data) => {
    console.log('submitAction ' + data)
     return {
         type: "REQUEST_UPLOAD", //can named anything you want
         data,//returns the single user object
     }
 };