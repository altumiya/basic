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