// Write a program that finds the index of given element in a sorted array of integers by using the binary search
// algorithm.

function takeNumber(arr, key){
    first = 0,
    last = arr.length - 1;

arr.sort(function (a, b) {
    return a - b;
});
console.log(arr);

while (last >= first) {
    var mid = parseInt((first + last) / 2);
    if (arr[mid] < key) {
        first = mid + 1;
    } else if (arr[mid] > key) {
        last = mid - 1;
    } else {
        console.log(mid);
        break;
    }
}

};
takeNumber([5, 6, 17, 65, 3, 15, 25, 0, 45, 98, 55, 12], 17);
console.log('*****************');
takeNumber([5, 6, 17, 65, 3, 15, 25, 0, 45, 98, 55, 12], 5);
console.log('*****************');
takeNumber([5, 6, 17, 65, 3, 15, 25, 0, 45, 98, 55, 12], 45);