// let age = "33abc"
// there are 2 ways to check typeof variables.

// console.log(typeof age);
// console.log(typeof (age));

// Now let try to convert a number into different data types or check different datatypes typeof.

// let valueInNumber = Number(age)  // Conversion in number
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

let isLoogedIn = ("Hello Sajjan")
// let isLoogedIn = ""
let valueInBoolean = 1
console.log(Boolean(isLoogedIn));
console.log(typeof(isLoogedIn));

/*
When we try to conevert different data types we get following results:- 
"33" => 33 easily get's converted
"33abc" => NaN Type shows it's a number but result shows NaN.
true => 1; false => 0
"" => false It shows false for empty string when we convert it to boolean, But
"Hello Sajjan" => true    It shows true for String with value.
*/