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
const board_model_1 = __importDefault(require("./board.model"));
const boardService = __importStar(require("./board.service"));
const router = express_1.default.Router();
router.route('/').get(async (_req, res) => {
    const boards = await boardService.getAllBoards();
    res.status(200).json(boards);
});
router
    .route('/:id')
    .get(async (req, res) => {
    const { id } = req.params;
    const board = await boardService.getBoardById(id);
    if (board === undefined) {
        res.status(404).send('not found');
    }
    else {
        res.status(200).json(board);
    }
});
router.route('/').post(async (req, res) => {
    const data = new board_model_1.default({ ...req.body });
    const board = await boardService.createBoard(data);
    res.status(201).json(board);
});
router
    .route('/:id')
    .delete(async (req, res) => {
    const { id } = req.params;
    boardService.deleteBoard(id);
    res.status(204).send('deleted');
});
router
    .route('/:id')
    .put(async (req, res) => {
    const { id } = req.params;
    const data = { ...req.body };
    const updBoard = await boardService.updateBoard(id, data);
    res.json(updBoard).status(200);
});
exports.default = router;
