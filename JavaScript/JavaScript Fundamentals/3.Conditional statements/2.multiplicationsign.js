//Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.
//Use a sequence of if operators.

function multiSing(a, b, c){
    var negativeCount = 0,
    result,
    arr = [a, b, c];

    for (var i = 0; i < arr.length; i += 1) {
        if (arr[i] < 0) {
            negativeCount += 1;
        }
    }

    if (a * 1 === 0 || b * 1 === 0 || c * 1 === 0) {
        result = 0;
    } else if (negativeCount % 2 === 0) {
        result = '+';
    } else {
        result = '-';
    }
    return result;

}
console.log(multiSing(5, 2, 2));
console.log('*****************');
console.log(multiSing(-2, -2, 1));
console.log('*****************');
console.log(multiSing(-2, 4, 3));
console.log('*****************');
console.log(multiSing(0, -2.5, 4));