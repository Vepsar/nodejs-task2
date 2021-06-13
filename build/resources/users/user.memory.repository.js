"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.postUser = exports.getById = exports.getAll = void 0;
const task_service_1 = require("../tasks/task.service");
const users = [];
/**
 * Return array of all users
 * @returns {Promise<User[]>}
 */
const getAll = async () => users;
exports.getAll = getAll;
/**
 * Function to return user by providing ID
 * @param {*} id - user ID
 * @returns {Promise<User>}
 * Return Object by class User
 */
const getById = async (id) => {
    const res = users.find((user) => user.id === id);
    return res;
};
exports.getById = getById;
/**
 * Function for adding user in DB
 * @param {User} data - new user's info
 * @returns {Promise<User>}
 * Return created User
 */
const postUser = async (data) => {
    users.push(data);
    return data;
};
exports.postUser = postUser;
/**
 * Funtion for deleteing user by providing ID
 * @param {String} id - ID of deletting user
 * @returns {Promise<void>}
 * Return message about delete
 */
const deleteUser = async (id) => {
    await task_service_1.deleteByUserId(id);
    const idNum = users.findIndex((user) => user.id === id);
    users.splice(idNum, 1);
};
exports.deleteUser = deleteUser;
/**
 * Function for update informtaion about User by ID
 * @param {String} id - user ID
 * @param {IUserRequest} data - info to update
 * @returns {Promise<User>}
 * Return updated object
 */
const updateUser = async (id, data) => {
    const idNum = users.findIndex((user) => user.id === id);
    if (idNum && typeof id === 'string') {
        const udpUsr = {
            id,
            name: data.name,
            login: data.login,
            password: data.password,
        };
        users.splice(idNum, 1, udpUsr);
        const result = users.find((user) => user.id === id);
        return result;
    }
    return undefined;
};
exports.updateUser = updateUser;
