"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const { PORT } = require('./common/config');
const config_1 = __importDefault(require("./common/config"));
const PORT = config_1.default.PORT;
// const app = require('./app');
const app_1 = require("./app");
app_1.app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`));
