const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor)


// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)


const chai = {
    name: "Ginger Chai",
    price: 200,
    isAvailable: true,

    orderChai: function() {
        console.log("Chai nahi bani")
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// Object.defineProperty(chai, "name", {
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))


for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== "function") {
        console.log(`${key} : ${value}`)
    }
}
