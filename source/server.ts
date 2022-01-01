import http from "http";
import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
// functions/variables
import logging from "./config/logging";
import config from "./config/config";
// routes
import skuRoutes from "./routes/sku";
import categoryRoutes from "./routes/category";

const NAMESPACE = "Server";
const router = express();

// connect to mongo
mongoose
  .connect(config.mongo.url, config.mongo.options)
  .then((res) => {
    logging.info(NAMESPACE, "Connected to mongoDB!");
  })
  .catch((error) => {
    logging.error(NAMESPACE, error.message, error);
  });

// logging the request
router.use((req: Request, res: Response, next: NextFunction) => {
  logging.info(
    NAMESPACE,
    `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`
  );

  res.on("finish", () => {
    logging.info(
      NAMESPACE,
      `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`
    );
  });
  next();
});

// parse the request
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// api rules
router.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  next();
});

// routes
router.use("/api/skus", skuRoutes);
router.use("/api/categories", categoryRoutes);

// serve static files if in production
if (process.env.NODE_ENV === "production") {
  router.use(express.static("client/build"));

  router.get("*", (req: Request, res: Response) => {
    res.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });
}

// error handling
router.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error("not found");

  return res.status(404).json({
    message: error.message,
  });
});

// create server
const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () =>
  logging.info(
    NAMESPACE,
    `Server runing on ${config.server.hostname}:${config.server.port}`
  )
);
