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
Object.defineProperty(exports, "__esModule", { value: true });
exports.USE_FASTIFY = exports.SECRET_KEY = exports.POSTGRES_USER = exports.POSTGRES_PORT = exports.POSTGRES_PASSWORD = exports.POSTGRES_HOST = exports.POSTGRES_DB = exports.AUTH_MODE = exports.JWT_SECRET_KEY = exports.MONGO_CONNECTION_STRING = exports.NODE_ENV = exports.PORT = void 0;
const path = __importStar(require("path"));
const dotenv = __importStar(require("dotenv"));
dotenv.config({
    path: path.join(__dirname, '../../.env'),
});
const { PORT } = process.env;
exports.PORT = PORT;
const { NODE_ENV } = process.env;
exports.NODE_ENV = NODE_ENV;
const { MONGO_CONNECTION_STRING } = process.env;
exports.MONGO_CONNECTION_STRING = MONGO_CONNECTION_STRING;
const { JWT_SECRET_KEY } = process.env;
exports.JWT_SECRET_KEY = JWT_SECRET_KEY;
const { AUTH_MODE } = process.env;
exports.AUTH_MODE = AUTH_MODE;
const { POSTGRES_HOST } = process.env;
exports.POSTGRES_HOST = POSTGRES_HOST;
const { POSTGRES_PORT } = process.env;
exports.POSTGRES_PORT = POSTGRES_PORT;
const { POSTGRES_USER } = process.env;
exports.POSTGRES_USER = POSTGRES_USER;
const { POSTGRES_PASSWORD } = process.env;
exports.POSTGRES_PASSWORD = POSTGRES_PASSWORD;
const { POSTGRES_DB } = process.env;
exports.POSTGRES_DB = POSTGRES_DB;
const { SECRET_KEY } = process.env;
exports.SECRET_KEY = SECRET_KEY;
const { USE_FASTIFY } = process.env;
exports.USE_FASTIFY = USE_FASTIFY;
