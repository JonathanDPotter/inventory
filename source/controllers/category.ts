import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import Category from "../../models/categories";

const NAMESPACE = "Category Controller";

const createCategory = (req: Request, res: Response, next: NextFunction) => {
  let { brand, name, price, description, onHand } = req.body;

  const category = new Category({
    _id: new mongoose.Types.ObjectId(),
    brand,
    name,
    price,
    description,
    onHand,
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
