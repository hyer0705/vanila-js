const toDoForm = document.querySelector(".js-toDoForm"), // to do 입력 폼
    toDoInput = toDoForm.querySelector("input"), // to do input
    toDoList = document.querySelector(".js-toDoList"); // to do list <ul></ul>

const TODOS_LS = "toDos";

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "X";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function handleSubmitToDO(evnet) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {

    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmitToDO);
}
init();

/*
    1. function loadToDo(){}
    2.
*/