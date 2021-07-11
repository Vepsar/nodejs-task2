"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const { v4: uuid } = require('uuid');
const uuid_1 = require("uuid");
/**
 * Class represent a columns to a board
 * @constructor
 */
class Column {
    constructor({ id = uuid_1.v4(), title = 'Title', order = 0 } = {}) {
        this.id = id;
        this.title = title;
        this.order = order;
    }
}
exports.default = Column;
