import * as taskRepo from './task.mem.repo';
import Task, { ITaskRequest } from './task.model';

/**
 * Service for getting all tasks by the board ID
 * @param {String} id - board ID
 * @returns {Promise<Task[]>}
 */
const getAllTasks = (id: string): Promise<Task[]> => taskRepo.getAllTasks(id);

/**
 * Service for getting defined task by board ID and task ID
 * @param {String} boardid - board ID
 * @param {String} taskid - task ID
 * @returns {Promise<Task>}
 */
const getTaskById = (
  boardid: string,
  taskid: string
): Promise<Task | undefined> => taskRepo.getTaskById(boardid, taskid);

/**
 * Service for creating new task
 * @param {Task} data - object with new task
 * @returns {Promise<Task>} - return created task
 */
const createTask = (data: Task): Promise<Task> => taskRepo.createTask(data);

/**
 * Service for updating tasks
 * @param {String} boardid - board ID
 * @param {String} taskid - task ID
 * @param {ITaskRequest} data - updating info
 * @returns {Promise<Task>} - return updated task
 */
const updateTask = (
  boardid: string,
  taskid: string,
  data: ITaskRequest
): Promise<Task | undefined> => taskRepo.updateTask(boardid, taskid, data);

/**
 * Service for deleting task by ID
 * @param {String} taskid - task ID
 */
const deleteTask = (taskid: string): Promise<void> =>
  taskRepo.deleteTask(taskid);

/**
 * Service for removing deleted User from their tasks
 * @param {String} userid - ID of deleted User
 */
const deleteByUserId = (userid: string): Promise<void> =>
  taskRepo.deleteByUserId(userid);

export {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  deleteByUserId,
};
