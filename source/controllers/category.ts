import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import Category from "../../models/categories";

const NAMESPACE = "Category Controller";

const createCategory = (req: Request, res: Response, next: NextFunction) => {
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
        categories: results,
        count: results.length,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

const getCategory = (req: Request, res: Response, next: NextFunction) => {
  Category.findById(req.body.id)
    .exec()
    .then((result) => {
      return res.status(200).json({
        category: result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

const deleteCategory = (req: Request, res: Response, next: NextFunction) => {
  Category.findByIdAndRemove(req.body.id)
    .exec()
    .then((result) => {
      return res.status(200).json({
        result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

export default {
  createCategory,
  getAllCategories,
  getCategory,
  deleteCategory,
};
