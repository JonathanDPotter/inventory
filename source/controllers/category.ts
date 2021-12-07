import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import Category from "../../models/categories";

const NAMESPACE = "Category Controller";

const createCategory = (req: Request, res: Response, next: NextFunction) => {
  const reject = () => {
    res.setHeader("www-authenticate", "Basic");
    res.sendStatus(401);
  };

  const authorization = req.headers.authorization;

  if (!authorization) {
    return reject();
  }

  const [username, password] = Buffer.from(
    authorization.replace("Basic ", ""),
    "base64"
  )
    .toString()
    .split(":");

  if (!(username === "Jonathan" && password === process.env.AUTHORIZATION)) {
    return reject();
  }

  const { name } = req.body;

  const category = new Category({
    _id: new mongoose.Types.ObjectId(),
    name,
  });

  return category
    .save()
    .then((result) => {
      return res.status(201).json({ Category: result });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

const getAllCategories = (req: Request, res: Response, next: NextFunction) => {
  Category.find()
    .exec()
    .then((results) => {
      return res.status(200).json({
        Categories: results,
        count: results.length,
      });
    })
    .catch((error) => {
      message: error.message, error;
    });
};

export default { getAllCategories, createCategory };
