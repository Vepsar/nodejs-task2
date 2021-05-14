const boardRepo = require('./board.mem.repo')

const getAllBoards = () => boardRepo.getAllBoards()
const getBoardById = (id) => boardRepo.getBoardById(id)
const createBoard = (data) => boardRepo.createBoard(data)
const deleteBoard = (id) => boardRepo.deleteBoard(id)
const updateBoard = (id, data) => boardRepo.updateBoard(id, data)

module.exports = { getAllBoards, getBoardById, createBoard, deleteBoard, updateBoard}