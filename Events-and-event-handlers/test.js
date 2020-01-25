const title = document.querySelector("#title");

function resizeFunction(event) {
    console.log(event);
}

// window.addEventListener("resize", resizeFunction);

function changeColor() {
    title.style.color = "red";
}

title.addEventListener("click", changeColor);