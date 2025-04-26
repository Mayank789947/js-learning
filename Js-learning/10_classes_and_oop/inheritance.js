class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is ${this.username}`)
    }
}


class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourses() {
        console.log(`A new course has been added by ${this.username}`)
    }
}


const chai = new Teacher("chai", "chaichai@mail.com", "123")

chai.addCourses()
chai.logMe()

const masalaChai = new User("masalachai")
// masalaChai.addCourses()
masalaChai.logMe()