// Define parameter type explicitly
function addLanguage(langName) {
    const list = document.querySelector(".language");
    if (!list)
        return;
    const li = document.createElement("li");
    li.innerHTML = `${langName}`;
    list.appendChild(li);
}
addLanguage("python");
addLanguage("react");
addLanguage("c++");
// Optimized version using createTextNode
function addOptiLang(langName) {
    const list = document.querySelector(".language");
    if (!list)
        return;
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(langName));
    list.appendChild(li);
}
addOptiLang("ruby");
// Replace 2nd child with Mojo
const secondLang = document.querySelector("li:nth-child(2)");
if (secondLang) {
    const newLi = document.createElement("li");
    newLi.textContent = "mojo";
    secondLang.replaceWith(newLi);
}
// Replace 1st child using outerHTML
const firstLang = document.querySelector("li:first-child");
if (firstLang) {
    firstLang.outerHTML = "<li>typescript</li>";
}
// Remove the last child
const lastLang = document.querySelector("li:last-child");
if (lastLang) {
    lastLang.remove();
}
export {};
//# sourceMappingURL=dom1.js.map