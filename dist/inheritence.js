class student {
    login(name, password) {
        if (name && password) {
            return "student login";
        }
        else {
            return "error";
        }
    }
    marks(marks) {
        if (marks > 40) {
            return "pass";
        }
        else {
            return "fail";
        }
    }
}
var s1 = new student();
console.log(s1.marks(50));
class teacher {
    login(name, password) {
        if (name && password) {
            return "teacher login";
        }
        else {
            return "error";
        }
    }
    subject(subject) {
        return "teaches" + subject;
    }
}
var t1 = new teacher();
console.log(t1.login("sam", "bio"));
//inheritance example
export class Auth {
    login(name, password) {
        if (name && password) {
            return `${name} logged in successfully`;
        }
        else {
            return "error";
        }
    }
}
class Student extends Auth {
    marks(marks) {
        if (marks > 40) {
            return "pass";
        }
        else {
            return "fail";
        }
    }
}
var s2 = new Student();
console.log(s2.marks(50));
class Teacher extends Auth {
    subject(subject) {
        return `teaches ${subject}`;
    }
}
var t2 = new Teacher();
console.log(t2.login("sam", "password123"));
console.log(t2.subject("bio"));
//# sourceMappingURL=inheritence.js.map