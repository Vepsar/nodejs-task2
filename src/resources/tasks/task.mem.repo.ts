import { Task } from '../entities/task';
import { ITaskRequest } from '../../utils/types';
import { getRepository } from 'typeorm';

/**
 * Return all tasks by providing board ID or empty no-zero-length array if tasks has no exsist
 * @param {String} id - board's ID
 * @returns {Promise<Task[]>}
 */
const getAllTasks = async (id: string | undefined): Promise<Task[]> => {
  const taskRepo = getRepository(Task);
  return taskRepo.find({ where: { boardId: `${id}` } });
};

/**
 * Return task from the board by providing board's ID and task ID
 * @param {String} boardid - board id
 * @param {String} taskid - task id
 * @returns {Promise<Task|undefined>}
 */
const getTaskById = async (
  boardid: string | undefined,
  taskid: string | undefined
): Promise<Task | undefined> => {
  const taskRepo = getRepository(Task);
  if (taskid === undefined || boardid === undefined) {
    return undefined;
  }
  return await taskRepo.findOne({
    where: { id: taskid, boardId: boardid },
  });
};

/**
 * Creating task from the reciving data
 * @param {Task} data - data of new task
 * @returns {Promise<Task>} - return created task
 */
const createTask = async (data: ITaskRequest): Promise<Task | undefined> => {
  const taskRepo = getRepository(Task);
  const newTask = taskRepo.create(data);
  const savedTask = await taskRepo.save(newTask);
  return taskRepo.findOne(savedTask.id);
};

/**
 * Function to update task by ID of task and board with the info, provided bt data
 * @param {String} boardid - board ID
 * @param {String} taskid - task ID
 * @param {ITaskRequest} data  - updating info
 * @returns {Promise<Task>} - return updated task
 */
const updateTask = async (
  boardid: string | undefined,
  taskid: string | undefined,
  data: ITaskRequest
): Promise<Task | undefined> => {
  const taskRepo = getRepository(Task);
  const resp = taskRepo.findOne(taskid);
  if (taskid === undefined || boardid === undefined || resp === undefined) {
    return undefined;
  }
  const updTask = await taskRepo.update(taskid, data);
  return updTask.raw;
};

/**
 * Delete task by ID
 * @param {String} taskid - ID of task that need to delete
 */
const deleteTask = async (
  taskid: string | undefined
): Promise<'deleted' | 'not found'> => {
  const taskRepo = getRepository(Task);
  if (taskid === undefined) return 'not found';
  const deleted = await taskRepo.delete({ id: taskid });
  if (deleted.affected) return 'deleted';
  return 'not found';
};

/**
 * Function to delete in all task User with providing ID if that user was deleted
 * @param {String} userid - ID of deleted user
 */
const deleteByUserId = async (userid: string | undefined): Promise<void> => {
  const taskRepo = getRepository(Task);
  const tasks = await taskRepo.find({ where: { userId: userid } });
  if (tasks !== undefined) {
    Promise.all(
      tasks.map(
        async (task: Task): Promise<void> => {
          if (task.id !== undefined)
            await taskRepo.update(task.id, { userId: null });
        }
      )
    );
  }
  return undefined;
};

export {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  deleteByUserId,
};
