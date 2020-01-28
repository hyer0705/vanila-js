const toDoForm = document.querySelector(".js-toDoForm"), // to do 입력 폼
    toDoInput = toDoForm.querySelector("input"), // to do input
    toDoList = document.querySelector(".js-toDoList"); // to do list <ul></ul>

const TODOS_LS = "toDos"; // localStorage 에 값을 저장할 때 쓰일 키 값

const toDos = []; // toDos 라는 이름을 가진 array

function saveToDos() { // localStorage 에 저장할 때 쓰이는 함수
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // 객체를 String으로 바꾸어 저장해준다.
}

function paintToDo(text) { // 리스트 생성 및 localStorage에 저장할 때 쓰이는 함수 불러서 씀
    const li = document.createElement("li"); // li 생성
    const delBtn = document.createElement("button"); // button 생성
    const span = document.createElement("span"); // span 생성
    const newId = "toDo" + (toDos.length + 1); // id = toDo1, toDo2 이런식으로 생성 됨
    delBtn.innerHTML = "X";
    span.innerText = text;
    li.appendChild(span); // 부모 태그(li)에 자식 태그(span)를 추가함
    li.appendChild(delBtn); // 부모 태그(li)에 자식 태그(button)를 추가함
    li.id = newId; // li 에 id값을 추가함

    toDoList.appendChild(li); // ul 에 list 추가

    const toDoObj = { // localStorage에 저장할 때 쓰이는 value 값
        text: text, // 사용자가 입력한 to Do 값
        id: newId // li에 부여한 id 값
    }
    toDos.push(toDoObj); // toDos array list 에 toDoObj를 넣음
    saveToDos(); // localStorage 에 저장하는 함수 불러오기
}

function handleSubmitToDO(evnet) { // todolist input 에 event가 적용됐을 때 실행되는 함수
    event.preventDefault();
    const currentToDoValue = toDoInput.value; // 현재 입력된 값
    paintToDo(currentToDoValue);
    toDoInput.value = ""; // input 창 초기화
}

function loadToDos() { // localStorage에 있는 값 불러오는 함수
    const loadedToDos = localStorage.getItem(TODOS_LS); // localStorage에 저장된 키 값 불러오기
    if (loadedToDos !== null) { // localStorage에 하나라도 저장되어 있을 때, 비어있지 않을 때
        const parsedToDos = JSON.parse(loadedToDos); // 값을 객체로 바꿔준다.
        parsedToDos.forEach(function (toDo) { // forEach(객체) ? 객체에 있는 요소들을 하나씩 불러와서 비교
            paintToDo(toDo.text);
        });
    }
}

function init() { // 항상 실행되는 함수
    loadToDos(); // localStorage에 있는 값 불러오는 함수 불러오기
    toDoForm.addEventListener("submit", handleSubmitToDO); // toDoForm에 이벤트가 생겼을 때 실행
}
init(); // init() 함수 불러오기