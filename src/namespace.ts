namespace usernamespace{
   export class auth {
    login(){
        console.log("user logedin")
    }
}
export function getlist(){
    console.log("list of users",apiurl)
}
const apiurl="www.getme.com"
}

namespace adminnamespace{
   export class auth {
    login(){
        console.log("admin logedin")
    }
}
export function getlist(){
    console.log("list of admins")
}
}

var user4 =new usernamespace.auth()
user4.login()
usernamespace.getlist()
var user5 =new adminnamespace.auth()
user5.login()
adminnamespace.getlist()