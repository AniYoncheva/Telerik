//Write a script that finds the greatest of given 5 variables.
//Use nested if statements.

function biggestNumber (a, b, c, d, f) {

	var biggest = a;

	if (b>biggest) {
		biggest = b;
	}
	if (c>biggest) {
		biggest = c;
	}
	if (d>biggest) {
		biggest = d;
	}
	if (f>biggest) {
		biggest = f;
	}
    return('The biggest number ' + biggest);
}

console.log(biggestNumber(5, 2, 2, 4, 1));
console.log('*****************');
console.log(biggestNumber(-2, -22, 1, 0 , 0));
console.log('*****************');
console.log(biggestNumber(-2, 4, 3, 2, 0 ));
console.log('*****************');
console.log(biggestNumber(0, -2.5, 0, 5, 5 ));