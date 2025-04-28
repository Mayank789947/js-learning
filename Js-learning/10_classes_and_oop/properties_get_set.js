function User(email, password) {
    this._email = email;
    this._password = password;


    Object.defineProperty(this, email, {
        get: function() {
            return this._email.toLowerCase()
        },
        set: function(value) {
           this._email = value
        }
    })

    Object.defineProperty(this, password, {
        get: function() {
            return this._password.toLowerCase()
        },
        set: function(value) {
           this._password = value
        }
    })
}


const chai = new User("CHAI@CHAI.com", "789")
console.log(chai._email)