const {v4: uuid} = require('uuid');

const orderCount = 0;

class Column {
    constructor({
        id = uuid(),
        title = 'Title',
        order = orderCount
    } = {}){
        this.id = id
        this.title = title
        this.order = order
    }
}

module.exports = Column