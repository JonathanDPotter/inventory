"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    autoIndex: false,
    retryWrites: false,
};
const MONGO_USERNAME = process.env.MONGO_USERNAME || "jPotter";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "bezfC3AU6AZHy288";
const MONGO_HOST = process.env.MONGO_URL ||
    "cluster0.bxqda.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const MONGO = {
    host: MONGO_HOST,
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    options: MONGO_OPTIONS,
    url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`,
};
const SERVER_HOSTNAME = process.env.HOST || "localhost";
const SERVER_PORT = process.env.PORT || 1337;
const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
};
const NODE_ENV = process.env.NODE_ENV || "development";
const config = {
    server: SERVER,
    mongo: MONGO,
    env: NODE_ENV,
};
exports.default = config;
