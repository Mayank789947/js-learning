const promiseOne = new Promise(function(resolve, reject){
    // Do an Async task
    // DB calls, cryptography, network

    setTimeout(function() {
        console.log("Async task is completed.")
        resolve()
    }, 1000)
})

promiseOne.then(function() {
    console.log("Promise Consumed")
})


new Promise(function(resolve, reject) {
   setTimeout(function() {
     console.log("Async task 2 completed")
     resolve()
   }, 1000)
}).then(function() {
    console.log("Promise resolved")
})



const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({userName: "Mike", email: "mike4u@mail.com"})
    }, 1000)
})

promiseThree.then(function(user) {
     console.log(user)
})


const promiseFour = new Promise(function(resolve, reject) {
     setTimeout(function() {
        let error = true
        if(!error) {
            resolve({username: "Sam", password: "1234"})
        } else {
            reject("ERROR: Something went wrong")
        }
     }, 1000)
})

promiseFour.then(function(user) {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
   console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if(!error) {
            resolve({username: "Javascript", password: "789"})
        } else {
            reject("ERROR: Js went wrong")
        }
     }, 1000)
})


async function consumePromiseFive() {
     try {
        const response = await promiseFive
        console.log(response)
     } catch (error) {
        console.log(error)
     }   
}

consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")   
//         const data = await response.json()     //Changes response data type from strin to json here.
//         console.log(data)
//     } catch (error) {
//         console.log("Error: ", error)
//     }
// } 

// getAllUsers()


fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((err) => console.log(err))