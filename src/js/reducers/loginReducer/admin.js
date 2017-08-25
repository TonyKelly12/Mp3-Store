import admin from "../../components/Login"

export default function(){
    const pctiveAdmin = {
        authKey: admin.authKey,
        createdOn:admin.createdOn, 
        email:admin.email,
        firstName:admin.firstName,
        lastName:admin.lastName,
        password:admin.password,
        username:admin.username,
        authstatus: false
    }
    return pctiveAdmin;
    
}