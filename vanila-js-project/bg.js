const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImg(imgNum) {
    const image = new Image();
    image.src = `images/${imgNum + 1}.jpg`;
    image.classList.add("bgImg");
    body.prepend(image);
}

// 랜덤 숫자 반환하는 함수
function getRandom() {
    const randomNum = Math.floor(Math.random() * 5);
    return randomNum;
}

function init() {
    const randomNumber = getRandom();
    paintImg(randomNumber);
}
init();