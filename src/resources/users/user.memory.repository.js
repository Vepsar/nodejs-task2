const users = [];
const taskService = require('../tasks/task.service');

/**
 * Return array of all users
 * @returns {Promise<User[]>}
 */
const getAll = async () => users;

/**
 * Function to return user by providing ID
 * @param {*} id - user ID
 * @returns {Promise<User>}
 * Return Object by class User
 */
const getById = async (id) => users.find((user) => user.id === id);

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

/**
 * Funtion for deleteing user by providing ID
 * @param {String} id - ID of deletting user
 * @returns {String}
 * Return message about delete
 */
const deleteUser = async (id) => {
  await taskService.deleteByUserId(id);
  const idNum = users.findIndex((user) => user.id === id);
  users.splice(idNum, 1);
  return 'deleted';
};

/**
 * Function for update informtaion about User by ID
 * @param {String} id - user ID
 * @param {Object} data - info to update
 * @returns {Promise<User>}
 * Return updated object
 */
const updateUser = async (id, data) => {
  const idNum = users.findIndex((user) => user.id === id);
  const udpUsr = {
    id,
    name: data.name,
    login: data.login,
    password: data.password,
  };
  users.splice(idNum, 1, udpUsr);
  return users.find((user) => user.id === id);
};

module.exports = { getAll, getById, postUser, deleteUser, updateUser };
