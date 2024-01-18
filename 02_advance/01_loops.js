//Control Flow
// if statement is evaluated when the condition is true.
//example:- 
// if (true) {
//     console.log("This is a if statement.")
// }

// const temp = 20;

// if (temp == 20){
//     console.log("It's too cold")
// }else{
//     console.log("It's too hot")
// }

//Switch cases//
// switch (key) {
    // case value:
        
    //     break;

//     default:
//         break;
// }

// let person = {
//     name: "Sajjan",
//     age: 27,
//     location: "Indore",
//     Office: "Taskcraft"
// }
// // const new_person = new Symbol("New Person")
// // person.name = new_person
// // console.log(person)
// // console.log(person["age"])

// // console.log(Object.values(person))

// function isUserLoggedIn(person_name){
//     if (!person_name) {
//         return console.log("You are not a person")
//     }
//     return (`Hello from ${person_name}`)
// }

// // isUserLoggedIn()
// let username = console.log(isUserLoggedIn(""));

// let chai = () => {
//     console.log("this is a arrow function.")
// }
// IIFE is used to immediately invoke the function in js. And to avoid the global pollution to that function.

(function hello() {
    console.log("This is hello.")
})();

(function hello() {
    console.log("This is hello 2")
})()

//Execution Phase
// Global execution => this
// Memory Execution 
// execution phase

//falsy and truthy values are those which we just assume that these are true and false.

//falsy values are:-
//false, 0, -0, "", null, undefined, NaN, 0n, BigInt

// truthy values are:- 

// true, "0", "false", " ", [], { }, function(){}


// loops

// for (let index = 0; index < 10; index++) {
//     // const element = array[index];
//     console.log(index)
    
// }

// let x = 0;
// while (x < 10) {
//     console.log(`this is a number ${x}`)
//     x++
// }

// for in loop
// mostly preferrend for objects
// for (const key in object) {
    
// }

// for of loop
// mostly preferred for arrays
// for (const iterator of object) {
    
// }

const coding_lang = ["ruby", "c++", "py", "swift", "java", "js"]
// coding_lang.forEach( function (item) {
//     console.log(`this is a programming ${item}`)
// })

// coding_lang.forEach((item) => {
//     console.log(item)
// })
// For each does not return anything, but if you want to return anything we have 2 option either you can use filters or you can put the conditional statement for that.

const num = [1,2,3,4,5,6,7,8,9,10]

// const myNum = num.filter( (num) => num > 5) In this scenario inplicit return is called.
// console.log(myNum)

// const myNum = num.filter( (num) => {
//     return num > 5   In this we have to call explicit return for returning the value.
// })
// console.log(myNum)

const myNum = []

// num.forEach( (num) => {
//     if (num > 5) {
//         myNum.push(num)
//     }
// })
// console.log(myNum)


// Reduce Function is used to get the total of values
// const myTotal = num.reduce( (acc, item) => (acc+item),0)
// console.log(myTotal)
