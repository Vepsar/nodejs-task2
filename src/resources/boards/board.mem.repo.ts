import Board, { IBoardRequest } from './board.model';
import { getAllTasks, deleteTask } from '../tasks/task.service';
import Task from '../tasks/task.model';

const boards: Board[] = [];

/**
 * Function for return Array of all boards in DB
 * @returns {Promise<Board[]>}
 * Return array of all boards from the DB
 */

const getAllBoards = async (): Promise<Board[]> => boards;

/**
 * Get id of the board and return this board when it exsist as the Object
 * @param {String} id This is string with id of board
 * @returns {Promise<Board|undefined>}
 * Return Object by class Board
 */
const getBoardById = async (id: string): Promise<Board | undefined> =>
  boards.find((board) => board.id === id);

/**
 * Create board in DB from the receiving data
 * @param {Board} data Object with class Board that contain all necessery information
 * @returns {Promise<Board>}
 * return created Object
 */

const createBoard = async (data: Board): Promise<Board> => {
  boards.push(data);
  return data;
};

/**
 * Update board in DB by providing id and updated info
 * @param {String} id id of the changing board
 * @param {IBoardRequest} data info that need to update
 * @returns {Promise<Board>}
 * Return updated object
 */

const updateBoard = async (
  id: string | undefined,
  data: IBoardRequest
): Promise<Board | undefined> => {
  const idNum = boards.findIndex((board) => board.id === id);
  if (idNum !== undefined && typeof id === 'string') {
    const updBrd = {
      id,
      title: data.title,
      columns: data.columns,
    };
    boards.splice(idNum, 1, updBrd);
    return boards.find((board) => board.id === id);
  }
  return undefined;
};

/**
 * Delete board from DB by providing ID
 * @param {String} id id of board that need to delete
 */

const deleteBoard = async (id: string | undefined): Promise<void> => {
  const tasksid = await getAllTasks(id);
  Promise.all(
    tasksid.map(
      async (task: Task): Promise<void> => {
        await deleteTask(task.id);
      }
    )
  );
  const idNum = boards.findIndex((board) => board.id === id);
  boards.splice(idNum, 1);
};

export { getAllBoards, getBoardById, createBoard, deleteBoard, updateBoard };
