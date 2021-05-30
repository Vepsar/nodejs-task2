"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const task_model_1 = __importDefault(require("./task.model"));
const taskService = __importStar(require("./task.service"));
const router = express_1.default.Router();
router
    .route('/:boardid/tasks')
    .get(async (req, res) => {
    const { boardid } = req.params;
    const tasks = await taskService.getAllTasks(boardid);
    res.json(tasks).status(200);
});
router
    .route('/:boardid/tasks/:taskid')
    .get(async (req, res) => {
    const { boardid, taskid } = req.params;
    const task = await taskService.getTaskById(boardid, taskid);
    if (task === undefined) {
        res.status(404).send('not found');
    }
    else {
        res.status(200).json(task);
    }
});
router
    .route('/:boardid/tasks')
    .post(async (req, res) => {
    const { boardid } = req.params;
    const data = new task_model_1.default({ ...req.body, boardId: boardid });
    const task = await taskService.createTask(data);
    res.status(201).json(task);
});
router
    .route('/:boardid/tasks/:taskid')
    .put(async (req, res) => {
    const { boardid, taskid } = req.params;
    const data = req.body;
    const updTask = await taskService.updateTask(boardid, taskid, data);
    res.status(200).json(updTask);
});
router
    .route('/:boardid/tasks/:taskid')
    .delete(async (req, res) => {
    const { taskid } = req.params;
    taskService.deleteTask(taskid);
    res.send('deleted');
});
exports.default = router;
// module.exports = router
