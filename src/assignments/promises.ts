const promiseOne: Promise<void> = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async is completed");
        resolve();
    }, 2000);
});

promiseOne.then(() => {
    console.log("task is completed");
});

interface UserData {
    user: string;
    email: string;
}

const promise3: Promise<UserData> = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async2 is completed");
        resolve({ user: "altaf", email: "altaf@g.com" });
    }, 2000);
});

promise3.then((user) => {
    console.log(user);
});


interface UserData {
    username: string;
    email: string;
}

const promise4: Promise<UserData> = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error: boolean = false; // if true it will return error in console
        if (!error) {
            resolve({ username: "altaf", email: "altaf@g.com" });
        } else {
            reject("something is wrong");
        }
    }, 2000);
});

promise4
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log("error");
    });