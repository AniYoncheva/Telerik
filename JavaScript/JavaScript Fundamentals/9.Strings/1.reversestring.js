// Reverse string
//Write a JavaScript function that reverses a string and returns it.


function reverseString(string) {
    var reverse = '';
    for (var i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    return console.log(reverse);
}
reverseString('Gosho');