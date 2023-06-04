"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const container = document.getElementById("app");
let result = ``;
function fizzBuzz(number) {
    let fizzBuzz = 'fizzBuzz';
    let fizz = 'Fizz';
    let buzz = 'Buzz';
    for (let i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            result += '<div>' + fizzBuzz + '</div>';
        }
        else if (i % 3 === 0) {
            result += '<div>' + fizz + '</div>';
        }
        else if (i % 5 === 0) {
            result += '<div>' + buzz + '</div>';
        }
        else {
            result += '<div>' + i + '</div>';
        }
    }
}
fizzBuzz(99);
container.innerHTML += "<div>" + result + "</div>";
