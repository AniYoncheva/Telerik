//Write a script that finds the biggest of three numbers.
//Use nested if statements.

var greatest;

function biggestNumber (a, b, c) {
    
    if (a > b && a > c) {
        greatest = a;
    }
    if (b > a && b > c) {
        greatest = b;
    }
    if (c > a && c > b) {
        greatest = c;
    }
    return('The greatest number ' + greatest);

}

console.log(biggestNumber(5, 2, 2));
console.log('*****************');
console.log(biggestNumber(-2, -2, 1));
console.log('*****************');
console.log(biggestNumber(-2, 4, 3));
console.log('*****************');
console.log(biggestNumber(0, -2.5, 4));