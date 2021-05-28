const tasks = [];
/**
 * Return all tasks by providing board ID or empty no-zero-length array if tasks has no exsist
 * @param {String} id - board's ID
 * @returns {Promise<Task[]>}
 */
const getAllTasks = async (id) =>
  tasks.filter((task) => task.boardId === id).length > 0
    ? tasks.filter((task) => task.boardId === id)
    : [''];

/**
 * Return task from the board by providing board's ID and task ID
 * @param {String} boardid - board id
 * @param {String} taskid - task id
 * @returns {Promise<Task>}
 */
const getTaskById = async (boardid, taskid) =>
  tasks.find((task) => task.boardId === boardid && task.id === taskid);

/**
 * Creating task from the reciving data
 * @param {Task} data - data of new task
 * @returns {Promise<Task>} - return created task
 */
const createTask = async (data) => {
  tasks.push(data);
  return data;
};

/**
 * Function to update task by ID of task and board with the info, provided bt data
 * @param {String} boardid - board ID
 * @param {String} taskid - task ID
 * @param {Object} data  - updating info
 * @returns {Promise<Task>} - return updated task
 */
const updateTask = async (boardid, taskid, data) => {
  const idNum = tasks.findIndex((task) => task.id === taskid);
  const updTask = {
    id: taskid,
    title: data.title,
    order: data.order,
    description: data.description,
    userId: data.userId,
    boardId: boardid,
    columnId: data.columnId,
  };
  tasks.splice(idNum, 1, updTask);
  return tasks.find((task) => task.boardId === boardid && task.id === taskid);
};

/**
 * Delete task by ID
 * @param {String} taskid - ID of task that need to delete
 */
const deleteTask = async (taskid) => {
  const idNum = tasks.findIndex((task) => task.id === taskid);
  tasks.splice(idNum, 1);
};

/**
 * Function to delete in all task User with providing ID if that user was deleted
 * @param {String} userid - ID of deleted user
 */
const deleteByUserId = async (userid) => {
  tasks.forEach((task) => {
    if (task.userId === userid) {
      Object.assign(task, { userId: null });
    }
  });
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  deleteByUserId,
};
