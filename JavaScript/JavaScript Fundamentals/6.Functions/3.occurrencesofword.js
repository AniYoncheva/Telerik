//Write a function that finds all the occurrences of word in a text.
//The search can be case sensitive or case insensitive.
//Use function overloading.

function countOccurrences(text, searchedWord, isCaseSensitive) {
    isCaseSensitive = isCaseSensitive || false;
    var substrings = text.split(searchedWord);
    return substrings.length - 1;
}

function printResult() {
    var text = 'Hello World';
    var searchedWord = 'Hello';
    console.log(countOccurrences(text, searchedWord, true));
}

printResult();