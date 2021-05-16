const {v4: uuid} = require('uuid');

class Task{
    constructor({
        id = uuid(),
        title = "Title",
        order = 0,
        description = 'Description',
        userId = 'userid',
        boardId = 'boardid',
        columnId = 'columnid'
    } ={}) {
        this.id = id
        this.title = title
        this.order = order
        this.description = description
        this.userId = userId
        this.boardId = boardId
        this.columnId = columnId
    }

    static toResponse(task){
        const { title, order, description, userId, columnId, boardId} = task
        return {title, order, description, columnId, userId, boardId}
    }
}

module.exports = Task