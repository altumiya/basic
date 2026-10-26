const promiseOne: Promise<void> = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async is completed");
        resolve();
    }, 2000);
});

promiseOne.then(() => {
    console.log("task is completed");
});