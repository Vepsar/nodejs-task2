const boards = []
const taskService = require('../tasks/task.service')

const getAllBoards = async () => boards
const getBoardById = async (id) => boards.find((board)=>board.id === id)

const createBoard = async (data) => {
    boards.push(data)
    return data
}

const updateBoard = async (id, data) => {
    const idNum = boards.findIndex((board)=>board.id === id)
    const updBrd = {
        id,
        title: data.title,
        columns: data.columns
    }
    boards.splice(idNum, 1, updBrd)
    return boards.find((board)=>board.id === id)
}

const deleteBoard = async (id) => {
  const tasksid = await taskService.getAllTasks(id)
  Promise.all(tasksid.map(async (task) =>{
          await taskService.deleteTask(task.id)
      }))
      const idNum = boards.findIndex((board)=>board.id === id)
  boards.splice(idNum, 1)
}


module.exports = {getAllBoards, getBoardById, createBoard, deleteBoard, updateBoard}