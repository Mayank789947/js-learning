const user = {
    userName: "Mayank",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.userName}, welcome to the website!`);
        console.log(this);
    }
}


// user.welcomeMessage()
// user.userName = "Mike"
// user.welcomeMessage()


// console.log(this);


// function chai() {
//     let username = "Mayank"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Mayank"
//     console.log(this.username);
// }



// Arrow function

// const chai = () => {
//     let username = "Mayank"
//     console.log(this);
// }

// chai()


// Explicit return

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 5));


//Implicit Return

// const addTwo = (num1, num2) => num1 + num2 // First way to write

// const addTwo = (num1, num2) => ( num1 + num2 ) // Second way to write using paranthesis.

// const addTwo = (num1, num2) => ({ userName: "Mayank"}) // Use parenthesis while implicit return a object.

// console.log(addTwo(3, 5));
