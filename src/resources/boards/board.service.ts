import * as boardRepo from './board.mem.repo';
import { IBoardRequest } from '../../utils/types';
import { Board } from '../entities/board';
/**
 * Service to get all boards
 * @returns {Promise<Board[]>}
 */
const getAllBoards = (): Promise<Board[]> => boardRepo.getAllBoards();

/**
 * Service for returning board by provided ID
 * @param {String} id - board's ID
 * @returns {Promise<Board>}
 */
const getBoardById = (id: string): Promise<Board | undefined> =>
  boardRepo.getBoardById(id);

/**
 * Service for creating board by data
 * @param {Board} data - board's data
 * @returns {Promise<Board>}
 */
const createBoard = (data: Board): Promise<Board | undefined> =>
  boardRepo.createBoard(data);

/**
 * Service to delete board by ID
 * @param {String} id - ID of board that need to delete
 */
const deleteBoard = (id: string | undefined): Promise<void> =>
  boardRepo.deleteBoard(id);

/**
 * Service to updating board bt providing ID
 * @param {String|undefined} id - board's ID
 * @param {IBoardRequest} data - updating info
 * @returns {Promise<Board>} - return updated object
 */
const updateBoard = (
  id: string | undefined,
  data: IBoardRequest
): Promise<Board | undefined> => boardRepo.updateBoard(id, data);

export { getAllBoards, getBoardById, createBoard, deleteBoard, updateBoard };
