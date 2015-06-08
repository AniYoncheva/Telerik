// Remove elements
var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];

Array.prototype.remove = function(digit) {
	var length = arr.length;
	for (var i = 0; i < length; i+=1) {
		if (arr[i] === digit) {
		arr.splice(i, 1);
		}
	}
}

console.log(arr);
arr.remove(1);
console.log(arr);