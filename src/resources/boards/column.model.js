const { v4: uuid } = require('uuid');

const orderCount = 0;

/**
 * Class represent a columns to a board
 * @constructor
 */
class Column {
  /**
   * Columns data
   * @param {String} id - columns id (generated by uuid)
   * @param {String} title - columns title
   * @param {Number} Order - columns order number
   */
  constructor({ id = uuid(), title = 'Title', order = orderCount } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

module.exports = Column;
