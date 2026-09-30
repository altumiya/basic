const submitBtn = document.getElementById("submitBtn");

if (submitBtn) {
    submitBtn.addEventListener("click", () => {
        const username = document.getElementById("username") as HTMLInputElement | null;
        const password = document.getElementById("password") as HTMLInputElement | null;
        const email = document.getElementById("email") as HTMLInputElement | null;
        const age = document.getElementById("age") as HTMLInputElement | null;

        if (!username || !password || !email || !age) {
            console.error("One or more form fields are missing.");
            return;
        }

        const name: string = username.value;
        const pass: string = password.value;
        const mail: string = email.value;
        const userAge: number = parseInt(age.value, 10);

        console.log({
            name,
            mail,
            pass,
            userAge
        });
    });
}