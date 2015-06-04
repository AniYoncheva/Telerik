//Sorting an array means to arrange its elements in increasing order.
//Write a script to sort an array.
//Use the selection sort algorithm: Find the smallest element, 
//move it at the first position, find the smallest from the rest,
//move it at the second position, etc.



function sortNumber(arr){
	var firstArr,
	secondArr;
	for (firstArr = 0; firstArr < arr.length; firstArr+= 1) {
		for (secondArr = firstArr + 1; secondArr < arr.length; secondArr += 1) {
			if (arr[firstArr] > arr[secondArr]) {
				var tmp = arr[secondArr];
				arr[secondArr] = arr[firstArr];
				arr[firstArr] = tmp;
			};
		};
	};
	console.log(arr);
	
};

sortNumber([1, 5, 25, 3, 55, 8, 64, 12, 9]);
sortNumber([10, 5, 250, 13, 25, 8, 64, 12, 9]);