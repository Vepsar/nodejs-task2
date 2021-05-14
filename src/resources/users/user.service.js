const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getById = (id) => usersRepo.getById(id)

const postUser = (user) => usersRepo.postUser(user)
const deleteUser = (id) => usersRepo.deleteUser(id)
const updateUser = (id, data) => usersRepo.updateUser(id, data)

module.exports = { getAll, getById, postUser, deleteUser, updateUser };
