export default class User {
    constructor(email,name, password) {
        this._id = email;
        this._name = name;
        this._password = password;
    }

    greeting() {
        return `Hi, my name is ${this._name}`;
    }
}