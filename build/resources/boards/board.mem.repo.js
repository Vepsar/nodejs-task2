"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBoard = exports.deleteBoard = exports.createBoard = exports.getBoardById = exports.getAllBoards = void 0;
const task_service_1 = require("../tasks/task.service");
const boards = [];
/**
 * Function for return Array of all boards in DB
 * @returns {Promise<Board[]>}
 * Return array of all boards from the DB
 */
const getAllBoards = async () => boards;
exports.getAllBoards = getAllBoards;
/**
 * Get id of the board and return this board when it exsist as the Object
 * @param {String} id This is string with id of board
 * @returns {Promise<Board|undefined>}
 * Return Object by class Board
 */
const getBoardById = async (id) => boards.find((board) => board.id === id);
exports.getBoardById = getBoardById;
/**
 * Create board in DB from the receiving data
 * @param {Board} data Object with class Board that contain all necessery information
 * @returns {Promise<Board>}
 * return created Object
 */
const createBoard = async (data) => {
    boards.push(data);
    return data;
};
exports.createBoard = createBoard;
/**
 * Update board in DB by providing id and updated info
 * @param {String} id id of the changing board
 * @param {IBoardRequest} data info that need to update
 * @returns {Promise<Board>}
 * Return updated object
 */
const updateBoard = async (id, data) => {
    const idNum = boards.findIndex((board) => board.id === id);
    const updBrd = {
        id,
        title: data.title,
        columns: data.columns,
    };
    boards.splice(idNum, 1, updBrd);
    return boards.find((board) => board.id === id);
};
exports.updateBoard = updateBoard;
/**
 * Delete board from DB by providing ID
 * @param {String} id id of board that need to delete
 */
const deleteBoard = async (id) => {
    const tasksid = await task_service_1.getAllTasks(id);
    Promise.all(tasksid.map(async (task) => {
        await task_service_1.deleteTask(task.id);
    }));
    const idNum = boards.findIndex((board) => board.id === id);
    boards.splice(idNum, 1);
};
exports.deleteBoard = deleteBoard;
