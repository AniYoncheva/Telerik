// Deep copy

var person1 = {
	name: 'Pesho',
	age: 24,
	greet: 'Hi! I\'m Pesho!'
};

 function deepCopy(object){
        return JSON.parse(JSON.stringify(object));
    }

console.log(person1);

var person2 = deepCopy(person1);
person2.name = 'Ivan';

console.log(person2);
console.log(person1);