//Write a script that finds the maximal sequence of equal elements in an array.
//Example:
//input							 result
//2, 1, 1, 2, 3, 3, 2, 2, 2, 1 | 2, 2, 2

function getMaxEqualSequence(arr) {
    var equal = [arr[0]],
		sequence = [arr[0]],
		i;

    for (i = 1; i < arr.length; i+= 1) {
        if (arr[i] !== sequence[0]) {
            sequence = [arr[i]];
        } else {
            sequence.push(arr[i]);
        }

        if(sequence.length > equal.length){
            equal = sequence;
        }
    }

    console.log(equal);
}

getMaxEqualSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);