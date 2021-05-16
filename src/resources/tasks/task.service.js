const taskRepo = require('./task.mem.repo')

const getAllTasks = (id) => taskRepo.getAllTasks(id)
const getTaskById = (boardid, taskid) => taskRepo.getTaskById(boardid, taskid)
const createTask = (data) => taskRepo.createTask(data)
const updateTask = (boardid, taskid, data) => taskRepo.updateTask(boardid, taskid, data)
const deleteTask = (taskid) => taskRepo.deleteTask( taskid)
const deleteByUserId = (userid) => taskRepo.deleteByUserId(userid)

module.exports = {getAllTasks, getTaskById, createTask, updateTask, deleteTask, deleteByUserId}