// function sayHello(potato, age) {
//     console.log('Hello!!!', potato, "I already ", age);
// }

// sayHello("Lumiere", 25);

function sayHello(name, age) {
    console.log(`Hi. My name is ${name}, and I'm ${age} years old!`);
}

sayHello("Lumiere", 25);

function talk(word) {
    return `I said, "${word}"`;
}

console.log(talk("hungry"));

const calculator = {
    plus: function (n1, n2) {
        return n1 + n2;
    },

    minus: function (n1, n2) {
        return n1 - n2;
    },

    division: function (n1, n2) {
        return n1 / n2;
    },

    multiply: function (n1, n2) {
        return n1 * n2;
    }
}

console.log(calculator.plus(1800, 36952));

console.log(calculator.minus(2000, 3500));

console.log(calculator.division(100, 30));

console.log(calculator.multiply(30, 11));