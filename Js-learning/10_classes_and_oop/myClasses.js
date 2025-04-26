// class User {
//    constructor(username, email, password) {
//       this.username = username;
//       this.email = email;
//       this.password = password;
//    }

//    encryptPassword() {
//       return `${this.password}xyz`
//    }
   
//    changeUsername() {
//       return `${this.username.toUpperCase()}`
//    }
// }


// const chai = new User("chai", "chaiaurcode@mail.com", 123)

// console.log(chai.encryptPassword())
// console.log(chai.changeUsername())



// Behind the scene


function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    return `${this.password}xyz`
}

User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "teaaurcode@mail.com", 789)

console.log(tea.encryptPassword())
console.log(tea.changeUsername())