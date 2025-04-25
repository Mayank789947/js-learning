let myName = "Mayank       ";
let myChannel = "esphere       ";


console.log(myName.length);


let myHero = ["thor", "venom"]

let heroPower = {
    thor: "hammer",
    venom: "mutatation",

    getPower: function() {
        console.log(`Venom superpower is ${this.venom}`)
    }
}

Object.prototype.mayank = function() {
    console.log(`Mayank is present in all objects.`);
}

Array.prototype.heyMayank = function() {
    console.log(`Mayank says Hello`)
}

// heroPower.mayank()
// myHero.mayank()
// myHero.heyMayank()
// heroPower.heyMayank()


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"mayank    ".trueLength()
"iceTea".trueLength()