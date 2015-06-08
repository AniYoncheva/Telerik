// Has property


function hasProperty(obj, prop) {
	if (prop in obj) {
		return console.log(obj +' has a property '+ prop);
	} else {
		return console.log(obj +' does NOT have a property '+ prop);
	}
}

console.log(person1.greet);
hasProperty(person1, 'greet');	// The property has to be written like a string!
