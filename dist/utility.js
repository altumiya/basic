var collegedata3 = {
    name: "gnkhalsa",
    location: "mumbai",
    student: 1002,
    //branch:2  still okay due to partial utility type
    //address:"matunga" //Object literal may only specify known properties, and 'address' does not exist in type 'Partial<collegetype>'.
};
function getcollegedata(data) {
}
getcollegedata({ name: "khalsa", location: "mumbai" }); // jitni collegetype me hai utni hi properties ayegi
function getcollegedata2(data) {
    return (data);
}
getcollegedata2({ name: "gnkhalsa", location: "matunga", student: 1001, branch: 2 }); // required every collegetype keys and values else shows error
var collegedata4 = {
    name: "khalsa2",
    location: "amritsar",
    student: 1003,
    branch: 3 //  error due to pick
};
var collegedata6 = {
    name: "khalsa",
    location: "mumbai",
    branch: 4
    // student:2001 {Object literal may only specify known properties, and 'student' does not exist in type 'Omit<collegetype, "student">'.}
};
var apicall = "success";
// apicall="pending"  //Type '"pending"' is not assignable to type '"loading" | "error" | "success"'.
var apicall2 = "loading";
var randomdata = null; // excludes null and undefined
var option = "admin";
var rolename = {
    admin: "altaf",
    student: "altu",
    guest: 'bla blah blah'
};
export {};
//# sourceMappingURL=utility.js.map