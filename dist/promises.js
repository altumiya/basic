function complexlogic() {
    return new Promise((resolved) => {
        setTimeout(() => {
            resolved("this is resolved"); // this will run first
        }, 2000);
    });
}
complexlogic().then((data) => {
    console.log(data);
    test2();
});
function test2() {
    console.log("test2");
}
function complexlogic2() {
    return new Promise((resolved) => {
        setTimeout(() => {
            resolved("this is resolved"); // this will run first
        }, 2000);
    });
}
complexlogic2().then((data) => {
    console.log(data);
    test2();
});
function test4() {
    console.log("test2 called");
}
const complexlogic4 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("this is resolved");
        }, 2000);
    });
};
complexlogic4().then((data) => {
    console.log(data);
    test4();
});
async function apicalling3() {
    const result = await fetch('https://dummyjson.com/todos');
    const data = await result.json();
    return data;
}
apicalling3().then((data) => {
    console.log(data);
});
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message); // error handling in ts 
    }
}
async function getSeat() {
    return {
        status: 200,
        data: { seat: "avail" }
    };
}
async function main() {
    const resp = await getSeat();
    console.log("Status:", resp.status);
    console.log("Seat:", resp.data.seat);
}
main();
export {};
//# sourceMappingURL=promises.js.map