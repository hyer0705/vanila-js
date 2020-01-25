const grade = prompt("이번에 수학 몇 점 맞았어?");

if (grade <= 100 && grade >= 90) {
    console.log("A");
} else if (grade <= 89 && grade >= 80) {
    console.log("B");
} else if (grade <= 79 && grade >= 70) {
    console.log("C");
} else if (grade <= 69 && grade >= 60) {
    console.log("D");
} else {
    console.log("F");
}

if (10 !== 5) {
    console.log("숫자가 같습니다.")
} else {
    console.log("숫자가 같지 않습니다.")
}