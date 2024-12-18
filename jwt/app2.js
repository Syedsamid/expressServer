import jwt from "jsonwebtoken";

function decryptData(){
    try{
        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbmFtZSI6InNhbWlkIiwibG5hbWUiOiJzeWVkIiwiYWdlIjoiMjMiLCJpYXQiOjE3MzQzNTUyNjQsImV4cCI6MTczNDM2MjQ2NH0.opXz0Tn5-R9-1SI8PwdM8Nxy_XQR5oY8qf0OyRHGzhA"
        let secreatKey = "123455";

        let userData = jwt.verify(token,secreatKey);
        console.log(userData);
    } catch (error){
        console.log(error);
    }
}

decryptData()