const title = document.querySelector("#title");

const BASE_COLOR = "rgb(5, 223, 215)";
const OTHER_COLOR = "rgb(236, 115, 115)";

function handleClick() {
    const currentColor = title.style.color;

    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function handleMouseEnter() {
    const currentColor = title.style.color;

    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleMouseEnter);
}
init();

function handleOnline() {
    console.log("wow online!");
}

function handleOffline() {
    console.log("wow offline!");
}

window.addEventListener("online", handleOnline);
window.addEventListener("offline", handleOffline);