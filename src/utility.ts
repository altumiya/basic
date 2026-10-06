interface collegetype{
    name:string,
    location:string,
    student:number,
    branch?:number
}

var collegedata3:Partial<collegetype>={
    name:"gnkhalsa",
    location:"mumbai",
    student:1002,
    //branch:2  still okay due to partial utility type
    //address:"matunga" //Object literal may only specify known properties, and 'address' does not exist in type 'Partial<collegetype>'.
}

function getcollegedata(data:Partial<collegetype>){

}
getcollegedata({name:"khalsa", location:"mumbai"}) // jitni collegetype me hai utni hi properties ayegi


function getcollegedata2(data:Required<collegetype>){
   return(data)
}
getcollegedata2({name:"gnkhalsa",location:"matunga",student:1001,branch:2}) // required every collegetype keys and values else shows error

var collegedata4:Pick<collegetype,'name' |'location'| 'student'>={
    name:"khalsa2",
    location:"amritsar",
    student:1003,
    branch:3//  error due to pick
}

var collegedata6:Omit<collegetype, 'student'>={
    name:"khalsa",
    location:"mumbai",
    branch:4
    // student:2001 {Object literal may only specify known properties, and 'student' does not exist in type 'Omit<collegetype, "student">'.}
}

type apistatus= "loading"| "error" | "pending"| "success"

var apicall:Exclude<apistatus, "pending"> = "success"
// apicall="pending"  //Type '"pending"' is not assignable to type '"loading" | "error" | "success"'.
 var apicall2:Extract<apistatus, "loading"| "success">= "loading"
 //apicall2="error"   Type '"error"' is not assignable to type '"loading" | "success"'.

 type random = string | number | undefined | null | string[];
 var randomdata:NonNullable<random>= null  // excludes null and undefined

type role = 'admin'| 'student' | 'guest'
var option: role= "admin"
var rolename:Record<role, string>={
    admin:"altaf",
    student:"altu",
    guest:'bla blah blah'
}
