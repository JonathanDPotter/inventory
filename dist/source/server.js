"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const logging_1 = __importDefault(require("./config/logging"));
const config_1 = __importDefault(require("./config/config"));
const sku_1 = __importDefault(require("./routes/sku"));
const category_1 = __importDefault(require("./routes/category"));
const path_1 = __importDefault(require("path"));
const NAMESPACE = "Server";
const router = (0, express_1.default)();
// connect to mongo
mongoose_1.default
    .connect(config_1.default.mongo.url, config_1.default.mongo.options)
    .then((res) => {
    logging_1.default.info(NAMESPACE, "Connected to mongoDB!");
})
    .catch((error) => {
    logging_1.default.error(NAMESPACE, error.message, error);
});
// logging the request
router.use((req, res, next) => {
    logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);
    res.on("finish", () => {
        logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
    });
    next();
});
// parse the request
router.use(body_parser_1.default.urlencoded({ extended: false }));
router.use(body_parser_1.default.json());
// api rules
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
// routes
router.use("/api/skus", sku_1.default);
router.use("/api/categories", category_1.default);
// error handling
router.use((req, res, next) => {
    const error = new Error("not found");
    return res.status(404).json({
        message: error.message,
    });
});
// serve static files if in production
if (config_1.default.env === "production") {
    router.use(express_1.default.static("client/build"));
    router.get("*", (req, res) => {
        res.sendFile(path_1.default.resolve(__dirname, "/client/build", "index.html"));
    });
}
// create server
const httpServer = http_1.default.createServer(router);
httpServer.listen(config_1.default.server.port, () => logging_1.default.info(NAMESPACE, `Server runing on ${config_1.default.server.hostname}:${config_1.default.server.port}`));
