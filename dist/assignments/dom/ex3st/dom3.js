// live clock updated every second
function showTime() {
    const clockElement = document.getElementById('currentTime');
    if (clockElement) {
        clockElement.innerHTML = new Date().toUTCString();
    }
}
showTime();
window.setInterval(showTime, 1000);
// hex color generator with typed string return
const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
console.log(randomColor());
// interval ID typed for browser environments
let intervalId = null;
const startChangingColor = () => {
    if (intervalId === null) {
        intervalId = window.setInterval(() => {
            document.body.style.backgroundColor = randomColor();
            const title = document.querySelector('#title');
            if (title) {
                title.style.color = randomColor();
            }
        }, 1000);
    }
};
const stopChangingColor = () => {
    if (intervalId !== null) {
        window.clearInterval(intervalId);
        intervalId = null;
    }
};
// typed element selections and event listeners
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const titleElem = document.querySelector('#title');
if (startBtn) {
    startBtn.addEventListener('click', startChangingColor);
}
if (stopBtn) {
    stopBtn.addEventListener('click', stopChangingColor);
}
if (titleElem) {
    titleElem.addEventListener('click', startChangingColor);
}
export {};
//# sourceMappingURL=dom3.js.map