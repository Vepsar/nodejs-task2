"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { v4: uuid } = require('uuid');
/**
 * Class represent a User that can word with tasks
 * @constructor
 */
class User {
    constructor({ id = uuid(), name = 'USER', login = 'user', password = 'P@55w0rd', } = {}) {
        this.id = id;
        this.name = name;
        this.login = login;
        this.password = password;
    }
    /**
     * Function to removing password from the object class User
     * @param {User} user - object that need to remove password field
     * @returns {Object}
     * Returning object like User but without the password
     */
    static toResponse(user) {
        const { id, name, login } = user;
        return { id, name, login };
    }
}
exports.default = User;
// module.exports = User;
