//Write a script that compares two char arrays lexicographically (letter by letter).

var firstArr = ['a','b','c','d','e'];
var secondArr = ['a','b','c','d','e'];


var isEqual = true;
if (firstArr.length === secondArr.length) {

    for (var i = 0; i < firstArr.length; i++) {

        if (firstArr[i] !== secondArr[i]) {
            isEqual = false;
            break;
        }
    }
}
else {
    isEqual = false;
}

console.log('Is char arrays equal?: ' + isEqual);