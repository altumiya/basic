class student{
    login(name:string, password:string){
        if(name && password){
            return "student login"
        }
        else{
            return "error"
        }
    }
    marks(marks:number){
         if(marks>40){
            return "pass"
        }
        else{
            return "fail"
        }
    }
}

var s1 =new student();
console.log(s1.marks(50))

class teacher{
    login(name:string, password:string){
        if(name && password){
            return "teacher login"
        }
        else{
            return "error"
        }
    }
    subject(subject:string){
         return "teaches" +subject
    }
}
var t1=new teacher()
console.log(t1.login("sam","bio"))

//inheritance example

class Auth {
    login(name: string, password: string): string {
        if (name && password) {
            return `${name} logged in successfully`; 
        } else {
            return "error";
        }
    }
}

class Student extends Auth {
    marks(marks: number): string {
         if (marks > 40) {
            return "pass";
        } else {
            return "fail";
        }
    }
}

var s2 = new Student();
console.log(s2.marks(50)); 

class Teacher extends Auth {
    subject(subject: string): string {
         return `teaches ${subject}`; 
    }
}

var t2 = new Teacher();

console.log(t2.login("sam", "password123")); 
console.log(t2.subject("bio")); 