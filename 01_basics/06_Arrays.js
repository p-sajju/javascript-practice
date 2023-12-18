// Arrays
let arr = [1,2,3,4,5,6]
// console.log(arr);

// const myArray = ["x","v","d",1,2,3,"sajjan"]
// console.log(myArray);

// const myArray = new Array(1,2,3,4,5)
// console.log(myArray);

// ***************Array methods*****************//

// arr.push(6)
// arr.push(7)
// arr.pop()

// arr.unshift(9)
// arr.shift()

// console.log(arr.includes(9));
// console.log(arr.indexOf(3));

// const newArr = arr.join()

// console.log(arr);
// console.log( newArr);


// slice, splice

console.log("A ", arr);

const myn1 = arr.slice(1, 3)  //Slice does not manuplates the original array

console.log(myn1);
console.log("B ", arr); //output [ 1, 2, 3, 4, 5, 6 ]


const myn2 = arr.splice(1, 3)  // Splice manuplates the orignal array
console.log("C ", arr); // output [ 1, 5, 6 ]
console.log(myn2);


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  // it will push entire array as a element inside the array.


// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)  // When we concat the array it will return the new array with elements of both the arrays.
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]  // spread operator(...) is also used to concat multiple arrays into one single array.

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  // It's a short hand funtion provided by js to sort an multiple arrays inside arrays into one.
console.log(real_another_array);  // We need to provide the stack level for sorting the array or simply flat(Infinity))



console.log(Array.isArray("Sajjan"))  // Used to check data type
console.log(Array.from("Sajjan"))  // From keyword is used to convert anything into array. If it's not able to convert that to array, it will return []
console.log(Array.from({name: "sajjan"})) // We can pass objects as well for conversion but we need to tell, array of keys or array of values.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // We can use Array.of() for converting multiple vales into one array.