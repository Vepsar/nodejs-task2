const {v4: uuid} = require('uuid');
const Column = require('./column.model')

class Board {
    constructor({
        id = uuid(),
        title = "Title",
        columns = []
    } = {}) {
        this.id = id
        this.title = title;
        this.columns = columns.map(col => new Column(col));
    }
}

module.exports = Board