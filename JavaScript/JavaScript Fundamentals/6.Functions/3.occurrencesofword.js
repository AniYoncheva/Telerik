//Write a function that finds all the occurrences of word in a text.
//The search can be case sensitive or case insensitive.
//Use function overloading.

var text = 'java script pesho gosho bla bla dran dran';
console.log(countOccurrence(text, 'java', false));
console.log(countOccurrence(text, 'pesho', true));

function countOccurrence(text, word, isCaseSensitive){
	var regexString = '\\b' + word + '\\b',
		modifier = isCaseSensitive ? 'g' : 'gi',
		regex = new RegExp(regexString, modifier);
		
	return text.match(regex).length;
}