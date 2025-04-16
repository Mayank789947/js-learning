// const steamUser = new Object();  //Singleton
const steamUser = {}  //Non-Singleton


steamUser.id = "abc123",
steamUser.name = "Mike",
steamUser.isLoggedIn = true

// console.log(steamUser);


const regularUser = {
    email: "something123@gmail.com",
    userFullName: {
        fullName: {
            firstName: "Mayank",
            lastName: "Rawat"
        }
    }
}


// console.log(regularUser.userFullName.fullName.lastName);


const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}
const obj4 = {5: "e", 6:"f"}

// const obj3 = { obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);

// console.log(Object.keys(steamUser));   // Return an array with all the keys
// console.log(Object.values(steamUser));   // Return an array with all the values
// console.log(Object.entries(steamUser));   // Return an array with all the values


console.log(steamUser.hasOwnProperty("isLoggedIn"));

