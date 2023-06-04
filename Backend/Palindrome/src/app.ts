const container: HTMLElement | any = document.getElementById("app")

let result: string = ``
function isPalindrome(item: string) {    
    let data = item.split('').reverse().join('') === item;
    result += '<div>' + item + " " + data + '</div>';
    return data;
}

isPalindrome("12321");
isPalindrome("181");
isPalindrome("1821");
isPalindrome("2882");
isPalindrome("a858a");
isPalindrome("811i182");
container.innerHTML += "<div>" + result + "</div>";
export {};