"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const column_model_1 = __importDefault(require("./column.model"));
class Board {
    constructor({ id = uuid_1.v4(), title = 'Title', columns = [] } = {}) {
        this.id = id;
        this.title = title;
        this.columns = columns.map((col) => new column_model_1.default(col));
    }
}
exports.default = Board;
