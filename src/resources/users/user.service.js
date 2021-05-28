const usersRepo = require('./user.memory.repository');

/**
 * Service for getting all users
 * @returns {Promise<User[]>}
 */
const getAll = () => usersRepo.getAll();

/**
 * Service for getting user by ID
 * @param {String} id - user ID
 * @returns {Promise<User>}
 */
const getById = (id) => usersRepo.getById(id);

/**
 * Service for creating user
 * @param {User} user - users data
 * @returns {Promise<User>}
 * Return created user
 */
const postUser = (user) => usersRepo.postUser(user);

/**
 * Deleting user by his ID
 * @param {String} id - ID of removing user
 */
const deleteUser = (id) => usersRepo.deleteUser(id);

/**
 * Service for updating user info
 * @param {String} id - user ID
 * @param {Object} data - new data that need to update
 * @returns {Promise<User>}
 * Return updated object
 */
const updateUser = (id, data) => usersRepo.updateUser(id, data);

module.exports = { getAll, getById, postUser, deleteUser, updateUser };
