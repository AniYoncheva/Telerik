//Write a script that finds the most frequent number in an array.
//Example:
//input										result
//4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3	| 4 (5 times)

function takeNumber(arr) {
	var element = arr[0],
		i,
		maxelement = 0,
		currelement,
		j;

	for ( i = 0; i < arr.length; i+= 1) {
		currelement = 0
		for (j = 0; j < arr.length; j+= 1) {
			if (arr[i] === arr[j]) {
				currelement++;
			}
		}

		if (currelement > maxelement) {
			maxelement = currelement;
			element = arr[i];
		}
	}

	console.log(element);
}

takeNumber([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);