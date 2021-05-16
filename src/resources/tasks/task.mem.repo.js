const tasks = []

// const getAllTasks = async (id) => tasks.find(task => task.boardid === id)
const getAllTasks = async (id) => tasks.filter(task => task.boardId === id).length > 0 ? tasks.filter(task => task.boardId === id) : ['']
const getTaskById = async (boardid, taskid) => tasks.find(task => task.boardId === boardid && task.id === taskid)

const createTask = async (data) => {
    tasks.push(data)
    return data
}

const updateTask = async (boardid, taskid, data) =>{
    const idNum = tasks.findIndex(task => task.id === taskid)
    const updTask = {
        id: taskid,
        title: data.title,
        order: data.order,
        description: data.description,
        userId: data.userId,
        boardId:  boardid,
        columnId: data.columnId
    }
    tasks.splice(idNum, 1, updTask)
    return tasks.find(task => task.boardId === boardid && task.id === taskid)
}

const deleteTask = async (taskid) =>{
    const idNum = tasks.findIndex(task => task.id === taskid)
    tasks.splice(idNum, 1)
}

const deleteByUserId = async (userid) => {
    // const usersTask = tasks.filter(task => task.userId === userid)
    tasks.forEach(task => {
        if (task.userId === userid){
            Object.assign(task, {userId: null})
        }
    })
}

module.exports = {getAllTasks, getTaskById, createTask, updateTask, deleteTask, deleteByUserId}