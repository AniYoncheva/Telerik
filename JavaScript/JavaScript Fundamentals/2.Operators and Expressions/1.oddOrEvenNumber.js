 //Write an expression that checks if given integer is odd or even.

 function Odd(num){
 	return (num % 2 === 0) ? false : true;
 }

for (var i = - 3; i <= 5; i++) {
	console.log("Num " + i + " is Odd: " + Odd(i))
};
