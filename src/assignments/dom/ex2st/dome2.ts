const sayAltaf = (): void => {
  console.log("altaf");
};

const textChange = (): void => {
  const heading = document.querySelector<HTMLHeadingElement>("h1");
  if (heading) {
    heading.innerHTML = "altaf hussain shaikh";
  }
};

// setTimeout returns a number in the browser DOM environment
const change: number = window.setTimeout(textChange, 2000);

const stopButton = document.querySelector<HTMLButtonElement>("#stop");

if (stopButton) {
  stopButton.addEventListener("click", (event: MouseEvent): void => {
    window.clearTimeout(change);
    console.log("stop");
  });
}