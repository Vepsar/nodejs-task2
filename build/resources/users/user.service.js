"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.postUser = exports.getById = exports.getAll = void 0;
// const usersRepo = require('./user.memory.repository');
const usersRepo = __importStar(require("./user.memory.repository"));
/**
 * Service for getting all users
 * @returns {Promise<User[]>}
 */
const getAll = () => usersRepo.getAll();
exports.getAll = getAll;
/**
 * Service for getting user by ID
 * @param {String} id - user ID
 * @returns {Promise<User>}
 */
const getById = (id) => usersRepo.getById(id);
exports.getById = getById;
/**
 * Service for creating user
 * @param {User} user - users data
 * @returns {Promise<User>}
 * Return created user
 */
const postUser = (user) => usersRepo.postUser(user);
exports.postUser = postUser;
/**
 * Deleting user by his ID
 * @param {String} id - ID of removing user
 */
const deleteUser = (id) => usersRepo.deleteUser(id);
exports.deleteUser = deleteUser;
/**
 * Service for updating user info
 * @param {String} id - user ID
 * @param {Object} data - new data that need to update
 * @returns {Promise<User>}
 * Return updated object
 */
const updateUser = (id, data) => usersRepo.updateUser(id, data);
exports.updateUser = updateUser;
