//Write a function to count the number of div elements on the web page


var tagName = 'div';  // 0
// var tagName = 'h1'; // 2

var count = countTags(tagName);

console.log(tagName + ' count: ' + count);

function countTags (tagName) {
	return document.getElementsByTagName(tagName).length;
}