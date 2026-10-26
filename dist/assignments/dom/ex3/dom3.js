"use strict";
class CustomReact {
    constructor() {
        this.library = "react";
        this.server = "http://localhost:8000";
        const button = document.querySelector("button");
        if (button) {
            button.addEventListener("click", this.handleClick.bind(this));
        }
    }
    handleClick() {
        console.log("clicked");
        console.log(this.server);
    }
}
const dom3 = new CustomReact();
