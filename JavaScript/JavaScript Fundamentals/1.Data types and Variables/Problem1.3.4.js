// Problem 1. JavaScript literals - Assign all the possible JavaScript literals to different variables.
// &&
// Problem 3. Typeof variables - Try typeof on all variables you created.
// &&
// Problem 4. Typeof null - Create null, undefined variables and try typeof on them.

var string = 'string';
var number = 12;
var float = 12.4;
var arr = [1, 2, 3];
var object = {course: 'JS', part: 1};
var func = function(){return;};
var nullValue = null;
var undefinedValue = undefined;
var boolean = true;

var variables = [string, number, float, arr, object, func, nullValue, undefinedValue, boolean];

for(var variable in variables){
    console.log(getTypeString(variables[variable]));
}

function getTypeString(obj){
   var result = obj;
    result += ' is ' + typeof obj;
    return result;
}