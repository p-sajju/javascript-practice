// singleton
// Object.create

// object literals

const mySym =  Symbol("key")


const JsUser = {
    name: "Sajjan",
    "full name": "Sajjan Patel",
    [mySym]: "mykey1",
    age: 18,
    location: "Indore",
    email: "Sajjan@yopmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "sajjan@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "sajjan@yopmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());