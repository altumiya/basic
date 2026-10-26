const sayAltaf = () => {
    console.log("altaf");
};
const textChange = () => {
    const heading = document.querySelector("h1");
    if (heading) {
        heading.innerHTML = "altaf hussain shaikh";
    }
};
// setTimeout returns a number in the browser DOM environment
const change = window.setTimeout(textChange, 2000);
const stopButton = document.querySelector("#stop");
if (stopButton) {
    stopButton.addEventListener("click", (event) => {
        window.clearTimeout(change);
        console.log("stop");
    });
}
export {};
//# sourceMappingURL=dome2.js.map