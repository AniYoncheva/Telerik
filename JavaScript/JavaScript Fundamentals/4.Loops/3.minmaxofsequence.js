//Write a script that finds the max and min number from a sequence of numbers.

function takeNumber(numSort){
	numSort.sort();
	console.log('min = ' + numSort[0]);
	console.log('max = ' + numSort[numSort.length - 1]);
	console.log(new Array(6).join('*'))
}

takeNumber([1, 2, 3, 4, 5]);
takeNumber([20, 52, 33, 14, 25]);
takeNumber([220, 620, 430, 140, 250]);
