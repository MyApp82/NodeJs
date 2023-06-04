const container: HTMLElement | any = document.getElementById("app")

let result: string = ``

function fizzBuzz(number: number) {
    let fizzBuzz: string = 'fizzBuzz';
    let fizz: string = 'Fizz';
    let buzz: string = 'Buzz';

    for (let i: number = 1; i <= number; i++) {
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
export {};