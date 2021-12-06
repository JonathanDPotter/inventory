import http from "http";
import express from "express";
import bodyParser from "body-parser";
import logging from "./config/logging";
import config from "./config/config";
import skuRoutes from "./routes/sku";
import mongoose from "mongoose";

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
router.use((req, res, next) => {
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
router.use((req, res, next) => {
  res.header("Acces-Control-Allow-Origin", "*");
  res.header(
    "Acces-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method == "OPTIONS") {
    res.header("Acces-Control-Allow-Methods", "GET PATCH DELETE POST PUT");
    return res.status(200).json();
  }
  next();
});

// routes
router.use("/api/skus", skuRoutes);

// error handling
router.use((req, res, next) => {
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
