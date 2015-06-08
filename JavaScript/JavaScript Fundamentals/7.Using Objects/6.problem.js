// Group people by age, first or last name

function groupByAge(array, prop) {
  	return array.sort(function(a, b){
  		return a.age-b.age;
  	});
}

function groupByFirstName(array, prop) {
  	return array.sort(function(a, b) {
    if(a.firstname < b.firstname) return -1;
    if(a.firstname > b.firstname) return 1;
    return 0;
	})
}

function groupByLastName(array, prop) {
  	return array.sort(function(a, b) {
    if(a.lastname < b.lastname) return -1;
    if(a.lastname > b.lastname) return 1;
    return 0;
	})
}

console.log('--- Grouped by Age:');
console.log(groupByAge(people, 'age'));
console.log('--- Grouped by First Name:');
console.log(groupByFirstName(people, 'firstname'));
console.log('--- Grouped by Last Name:');
console.log(groupByLastName(people, 'lastname'));