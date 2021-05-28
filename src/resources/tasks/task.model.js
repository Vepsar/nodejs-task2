const { v4: uuid } = require('uuid');

/**
 * Class represent a task that contains in boards
 * @constructor
 */
class Task {
  /**
   * Task data
   * @param {String} id - task ID
   * @param {String} title - task title
   * @param {Number} order - task order in board
   * @param {String} description - task decription
   * @param {String} userId  - ID of user which work on this task
   * @param {String} boardId - ID of board which contain this task
   * @param {String} columnId - ID of column which contain task
   */
  constructor({
    id = uuid(),
    title = 'Title',
    order = 0,
    description = 'Description',
    userId = 'userid',
    boardId = 'boardid',
    columnId = 'columnid',
  } = {}) {
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

module.exports = Task;
