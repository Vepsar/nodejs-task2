const users = [];

const getAll = async () => users;

const getById = async (id) => users.find((user) => user.id === id)

const postUser = async (data) => {
  users.push(data)
  return data
}

const deleteUser = async (id) => {
  const idNum = users.findIndex((user)=>user.id === id)
  users.splice(idNum, 1)
  return 'deleted'
}

const updateUser = async (id, data) => {
  const idNum = users.findIndex((user)=>user.id === id)
  const udpUsr = {
    id,
    name: data.name,
    login: data.login,
    password: data.password
  }
  users.splice(idNum, 1, udpUsr)
  return  users.find((user) => user.id === id)
}

module.exports = { getAll, getById, postUser, deleteUser, updateUser };
