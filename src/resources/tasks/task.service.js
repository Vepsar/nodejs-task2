const taskRepo = require('./task.mem.repo');

/**
 * Service for getting all tasks by the board ID
 * @param {String} id - board ID
 * @returns {Promise<Task[]>}
 */
const getAllTasks = (id) => taskRepo.getAllTasks(id);

/**
 * Service for getting defined task by board ID and task ID
 * @param {String} boardid - board ID
 * @param {String} taskid - task ID
 * @returns {Promise<Task>}
 */
const getTaskById = (boardid, taskid) => taskRepo.getTaskById(boardid, taskid);

/**
 * Service for creating new task
 * @param {Task} data - object with new task
 * @returns {Promise<Task>} - return created task
 */
const createTask = (data) => taskRepo.createTask(data);

/**
 * Service for updating tasks
 * @param {String} boardid - board ID
 * @param {String} taskid - task ID
 * @param {Task} data - updating info
 * @returns {Promise<Task>} - return updated task
 */
const updateTask = (boardid, taskid, data) =>
  taskRepo.updateTask(boardid, taskid, data);

/**
 * Service for deleting task by ID
 * @param {String} taskid - task ID
 */
const deleteTask = (taskid) => taskRepo.deleteTask(taskid);

/**
 * Service for removing deleted User from their tasks
 * @param {String} userid - ID of deleted User
 */
const deleteByUserId = (userid) => taskRepo.deleteByUserId(userid);

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  deleteByUserId,
};
