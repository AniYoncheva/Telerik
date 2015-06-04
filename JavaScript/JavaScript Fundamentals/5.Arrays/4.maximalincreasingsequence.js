//Write a script that finds the maximal increasing sequence in an array.
//Example:
//input					result
//3, 2, 3, 4, 2, 2, 4 | 2, 3, 4

function getMaxEqualSequence(arr) {
    var equal = [arr[0]],
		sequence = [arr[0]],
		i;

    for (i = 1; i < arr.length; i+= 1) {
        if (arr[i] > arr[i - 1]) {
            sequence.push(arr[i]);
        } else {
            sequence = [arr[i]];
        }

        if(sequence.length > equal.length){
            equal = sequence;
        }
    }

    console.log(equal);
}

getMaxEqualSequence([3, 2, 3, 4, 2, 2, 4]);