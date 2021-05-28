const boardRepo = require('./board.mem.repo');
/**
 * Service to get all boards
 * @returns {Promise<Board[]>}
 */
const getAllBoards = () => boardRepo.getAllBoards();

/**
 * Service for returning board by provided ID
 * @param {String} id - board's ID
 * @returns {Promise<Board>}
 */
const getBoardById = (id) => boardRepo.getBoardById(id);

/**
 * Service for creating board by data
 * @param {Board} data - board's data
 * @returns {Promise<Board>}
 */
const createBoard = (data) => boardRepo.createBoard(data);

/**
 * Service to delete board by ID
 * @param {String} id - ID of board that need to delete
 */
const deleteBoard = (id) => boardRepo.deleteBoard(id);

/**
 * Service to updating board bt providing ID
 * @param {String} id - board's ID
 * @param {Board} data - updating info
 * @returns {Promise<Board>} - return updated object
 */
const updateBoard = (id, data) => boardRepo.updateBoard(id, data);

module.exports = {
  getAllBoards,
  getBoardById,
  createBoard,
  deleteBoard,
  updateBoard,
};
