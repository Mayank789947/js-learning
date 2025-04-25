function setUserName(username) {
    // complex DB calls
    this.username = username
    console.log("called")
}

function createUser(username, email, password) {
    ////To hold the refrence call method is apply here using (this) while calling the function so that It can use their this for current context 
    // or use call explicitly to call the function
    
    setUserName.call(this, username)    

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "345")
console.log(chai)