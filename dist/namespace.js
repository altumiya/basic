var usernamespace;
(function (usernamespace) {
    class auth {
        login() {
            console.log("user logedin");
        }
    }
    usernamespace.auth = auth;
    function getlist() {
        console.log("list of users", apiurl);
    }
    usernamespace.getlist = getlist;
    const apiurl = "www.getme.com";
})(usernamespace || (usernamespace = {}));
var adminnamespace;
(function (adminnamespace) {
    class auth {
        login() {
            console.log("admin logedin");
        }
    }
    adminnamespace.auth = auth;
    function getlist() {
        console.log("list of admins");
    }
    adminnamespace.getlist = getlist;
})(adminnamespace || (adminnamespace = {}));
var user4 = new usernamespace.auth();
user4.login();
usernamespace.getlist();
var user5 = new adminnamespace.auth();
user5.login();
adminnamespace.getlist();
export {};
//# sourceMappingURL=namespace.js.map