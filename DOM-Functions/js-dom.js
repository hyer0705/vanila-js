const title = document.getElementById("title");
title.innerHTML = "Hi I'm Javascript";

// javascript 는 html 을 조종할 수 있다.
console.dir(title);

title.style.backgroundColor = "lightpink";

console.dir(document);

document.title = "I'm Javascript";

const test = document.querySelector(".title");