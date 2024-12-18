
import jwt from "jsonwebtoken"

function encrypt(){
    try {
        let obj = {
            fname: "samid",
            lname: "syed",
            age: "23"
        }
        let key = "123455"

        let token = jwt.sign(obj,key,{expiresIn : "2h"})

        console.log(token);
    } catch (error) {
        console.log(error);
    }
}
encrypt()


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbmFtZSI6InNhbWlkIiwibG5hbWUiOiJzeWVkIiwiYWdlIjoiMjMiLCJpYXQiOjE3MzQzNTUyNjQsImV4cCI6MTczNDM2MjQ2NH0.opXz0Tn5-R9-1SI8PwdM8Nxy_XQR5oY8qf0OyRHGzhA