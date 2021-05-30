import * as taskRepo from './task.mem.repo';
import Task, { ITaskRequest } from './task.model';

/**
 * Service for getting all tasks by the board ID
 * @param {String|undefined} id - board ID
 * @returns {Promise<Task[]>}
 */
const getAllTasks = (id: string | undefined): Promise<Task[]> =>
  taskRepo.getAllTasks(id);

/**
 * Service for getting defined task by board ID and task ID
 * @param {String|undefined} boardid - board ID
 * @param {String|undefined} taskid - task ID
 * @returns {Promise<Task>}
 */
const getTaskById = (
  boardid: string | undefined,
  taskid: string | undefined
): Promise<Task | undefined> => taskRepo.getTaskById(boardid, taskid);

/**
 * Service for creating new task
 * @param {Task} data - object with new task
 * @returns {Promise<Task>} - return created task
 */
const createTask = (data: Task): Promise<Task> => taskRepo.createTask(data);

/**
 * Service for updating tasks
 * @param {String|undefined} boardid - board ID
 * @param {String|undefined} taskid - task ID
 * @param {ITaskRequest} data - updating info
 * @returns {Promise<Task>} - return updated task
 */
const updateTask = (
  boardid: string | undefined,
  taskid: string | undefined,
  data: ITaskRequest
): Promise<Task | undefined> => taskRepo.updateTask(boardid, taskid, data);

/**
 * Service for deleting task by ID
 * @param {String|undefined} taskid - task ID
 */
const deleteTask = (taskid: string | undefined): Promise<void> =>
  taskRepo.deleteTask(taskid);

/**
 * Service for removing deleted User from their tasks
 * @param {String|undefined} userid - ID of deleted User
 */
const deleteByUserId = (userid: string | undefined): Promise<void> =>
  taskRepo.deleteByUserId(userid);

export {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  deleteByUserId,
};
