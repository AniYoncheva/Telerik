// Problem 5. Youngest person
var people = [
  { firstname : 'Gosho', lastname: 'Petrov', age: 32 }, 
  { firstname : 'Bay', lastname: 'Ivan', age: 81},
  { firstname : 'Pesho', lastname: 'Petkov', age: 23 },
  { firstname : 'Ivan', lastname: 'Ganchev', age: 44 },
  { firstname : 'Dragan', lastname: 'Draganov', age: 56 }
  ];

  function youngestPerson(array) {
  	var length = array.length;
  	var youngest = array[0].age;
  	for (var i = 1; i < length; i+=1) {
  		if (youngest > array[i].age) {
  			youngest = array[i].age;
  		}
  	}
  		return youngest;
  }

  console.log(youngestPerson(people));
