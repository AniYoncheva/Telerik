//Write an if statement that takes two double variables a and b and exchanges their values if the first one is greater than the second.
//As a result print the values a and b, separated by a space

function changeNumber(a, b){
	var c = a;
	if (a>b) {
		a=b;
		b=c;	
		return ("a: " + a + "\n"+ "b: " + b)
	}


	else {
		return("a: " + a + "\n" +"b: " + b)
	}
}
console.log(changeNumber(5, 2));
console.log("*****************")
console.log(changeNumber(3, 4));
console.log("******************")
console.log(changeNumber(5.5, 4.5));