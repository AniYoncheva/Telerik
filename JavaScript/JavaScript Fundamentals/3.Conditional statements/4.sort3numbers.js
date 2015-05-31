//Sort 3 real values in descending order.
//Use nested if statements.
//Note: Don’t use arrays and the built-in sorting functionality.

function sortedNum(a, b, c){
var sorted = 0;
    if (a >= b) {
        if (b >= c) {
            sorted = a + ' ' + b + ' ' + c;
        } 
        else if (c > a) {
                sorted = c + ' ' + a + ' ' + b;
            }else {
                sorted = a + ' ' + c + ' ' + b;
            }
        }
    else {
        if (b >= c) {
            if (a >= c) {
                sorted = b + ' ' + a + ' ' + c;
            } 
            else {
                sorted = b + ' ' + c + ' ' + a;
            }
        } 
        else {
            sorted = c + ' ' + b + ' ' + a;
        }
    }
    return sorted;
}

console.log(sortedNum(5, 1, 2));
console.log('*****************');
console.log(sortedNum(-2, -2, 1));
console.log('*****************');
console.log(sortedNum(-2, 4, 3));
console.log('*****************');
console.log(sortedNum(0, -2.5, 5));
console.log('*****************');
console.log(sortedNum(1, 1, 1));