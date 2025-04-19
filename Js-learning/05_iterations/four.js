const myObject = {
    js: "JavaScript",
    cpp: "C++",
    ts: "Typescript",
    rb: "ruby"
}

for (const key in myObject) {
//    console.log(myObject[key]);   //To get value from the object
}

const programming = ["js", "rb", "py", "cpp", "java"]

for (const key in programming) {
    // console.log(key);             //To get key from array
    // console.log(programming[key]);   //To get value from array
}


const map = new Map()
map.set("IN", "India")
map.set("us", "United States Of America")
map.set("fr", "France")
map.set("IN", "India")


for (const key in map) {
   console.log(key);
}