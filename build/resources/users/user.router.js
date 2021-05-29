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
const router = express_1.default.Router();
// const User = require('./user.model');
const user_model_1 = __importDefault(require("./user.model"));
const usersService = __importStar(require("./user.service"));
// const usersService = require('./user.service');
router.route('/').get(async (_req, res) => {
    const users = await usersService.getAll();
    res.json(users.map(user_model_1.default.toResponse));
});
router
    .route('/:id')
    .get(async (req, res) => {
    const { id } = req.params;
    const user = await usersService.getById(id);
    res.status(200).json(user_model_1.default.toResponse(user));
});
router.route('/').post(async (req, res) => {
    const data = new user_model_1.default({ ...req.body });
    const newUser = await usersService.postUser(data);
    res.status(201).json(user_model_1.default.toResponse(newUser));
});
router
    .route('/:id')
    .delete(async (req, res) => {
    const { id } = req.params;
    usersService.deleteUser(id);
    res.status(204).send('deleted');
});
router
    .route('/:id')
    .put(async (req, res) => {
    const { id } = req.params;
    const data = { ...req.body };
    const updUser = await usersService.updateUser(id, data);
    res.json(user_model_1.default.toResponse(updUser)).status(200);
});
exports.default = router;
// module.exports = router;
