// singleton
// Object.create


// object literals

const mySym = Symbol("key1");


const jsUser = {
    name: "Mayank",
    "full name": "Mayank Rawat",
    [mySym]: "myKey1",
    email: "myk123@mail.com",
    age: 24,
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Thu", "Sat"]
}


// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(jsUser);

jsUser.email = "myk123@hotmail.com"
// Object.freeze(jsUser)
// jsUser.email = "myk123@chatgpt.com"


// console.log(jsUser);


jsUser.greeting = function () {
    console.log("Hello Js User!");
}

jsUser.greetingTwo = function () {
    console.log(`Hello Js User!, ${this.name}`);
}

// console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());




