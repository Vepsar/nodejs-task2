"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteByUserId = exports.deleteTask = exports.updateTask = exports.createTask = exports.getTaskById = exports.getAllTasks = void 0;
// const taskRepo = require('./task.mem.repo');
const taskRepo = __importStar(require("./task.mem.repo"));
/**
 * Service for getting all tasks by the board ID
 * @param {String} id - board ID
 * @returns {Promise<Task[]>}
 */
const getAllTasks = (id) => taskRepo.getAllTasks(id);
exports.getAllTasks = getAllTasks;
/**
 * Service for getting defined task by board ID and task ID
 * @param {String} boardid - board ID
 * @param {String} taskid - task ID
 * @returns {Promise<Task>}
 */
const getTaskById = (boardid, taskid) => taskRepo.getTaskById(boardid, taskid);
exports.getTaskById = getTaskById;
/**
 * Service for creating new task
 * @param {Task} data - object with new task
 * @returns {Promise<Task>} - return created task
 */
const createTask = (data) => taskRepo.createTask(data);
exports.createTask = createTask;
/**
 * Service for updating tasks
 * @param {String} boardid - board ID
 * @param {String} taskid - task ID
 * @param {ITaskRequest} data - updating info
 * @returns {Promise<Task>} - return updated task
 */
const updateTask = (boardid, taskid, data) => taskRepo.updateTask(boardid, taskid, data);
exports.updateTask = updateTask;
/**
 * Service for deleting task by ID
 * @param {String} taskid - task ID
 */
const deleteTask = (taskid) => taskRepo.deleteTask(taskid);
exports.deleteTask = deleteTask;
/**
 * Service for removing deleted User from their tasks
 * @param {String} userid - ID of deleted User
 */
const deleteByUserId = (userid) => taskRepo.deleteByUserId(userid);
exports.deleteByUserId = deleteByUserId;
