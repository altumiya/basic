const submitBtn = document.getElementById("submitBtn");
if (submitBtn) {
    submitBtn.addEventListener("click", () => {
        const username = document.getElementById("username");
        const password = document.getElementById("password");
        const email = document.getElementById("email");
        const age = document.getElementById("age");
        if (!username || !password || !email || !age) {
            console.error("One or more form fields are missing.");
            return;
        }
        const name = username.value;
        const pass = password.value;
        const mail = email.value;
        const userAge = parseInt(age.value, 10);
        console.log({
            name,
            mail,
            pass,
            userAge
        });
    });
}
export {};
//# sourceMappingURL=inputs.js.map