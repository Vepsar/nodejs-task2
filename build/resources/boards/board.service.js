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
exports.updateBoard = exports.deleteBoard = exports.createBoard = exports.getBoardById = exports.getAllBoards = void 0;
const boardRepo = __importStar(require("./board.mem.repo"));
/**
 * Service to get all boards
 * @returns {Promise<Board[]>}
 */
const getAllBoards = () => boardRepo.getAllBoards();
exports.getAllBoards = getAllBoards;
/**
 * Service for returning board by provided ID
 * @param {String} id - board's ID
 * @returns {Promise<Board>}
 */
const getBoardById = (id) => boardRepo.getBoardById(id);
exports.getBoardById = getBoardById;
/**
 * Service for creating board by data
 * @param {Board} data - board's data
 * @returns {Promise<Board>}
 */
const createBoard = (data) => boardRepo.createBoard(data);
exports.createBoard = createBoard;
/**
 * Service to delete board by ID
 * @param {String} id - ID of board that need to delete
 */
const deleteBoard = (id) => boardRepo.deleteBoard(id);
exports.deleteBoard = deleteBoard;
/**
 * Service to updating board bt providing ID
 * @param {String} id - board's ID
 * @param {Board} data - updating info
 * @returns {Promise<Board>} - return updated object
 */
const updateBoard = (id, data) => boardRepo.updateBoard(id, data);
exports.updateBoard = updateBoard;
