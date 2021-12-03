import express, { Application, Request, Response, NextFunction } from "express";
import { connect, Schema, model } from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const mongodb = process.env.CONNECTION_STRING;
mongodb && connect(mongodb); //mongoose init

const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("It works!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
