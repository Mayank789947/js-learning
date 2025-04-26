class User {
    constructor(username) {
        this.username = username
    }


    logMe() {
        console.log(`Username: ${this.username}`)
    }


    static createId() {                       //static keyword allows you to stop access to any method that you do not want to give to every user.
        console.log(`_@${this.username}`)
    }
}

const mayank = new User("Mayank")
// mayank.createId()


class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email;
    }
}

const mark = new Teacher("Mark", "mark123@mail.com")
mark.logMe()
mark.createId()