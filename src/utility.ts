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