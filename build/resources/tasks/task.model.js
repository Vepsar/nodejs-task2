"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Task {
    constructor({ id = uuid_1.v4(), title = 'Title', order = 0, description = 'Description', userId = 'userid', boardId = 'boardid', columnId = 'columnid', } = {}) {
        this.id = id;
        this.title = title;
        this.order = order;
        this.description = description;
        this.userId = userId;
        this.boardId = boardId;
        this.columnId = columnId;
    }
    /**
     * Function for removing ID from the task object
     * @static
     * @param {Task} task - task for processing
     * @returns {Object} - object Task without task ID
     */
    static toResponse(task) {
        const { title, order, description, userId, columnId, boardId } = task;
        return { title, order, description, columnId, userId, boardId };
    }
}
exports.default = Task;
// module.exports = Task;
