import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import Sku from "../../models/skus";

const NAMESPACE = "Sku Controller";

const createSku = (req: Request, res: Response, next: NextFunction) => {
  let { brand, name, price, description, onHand, inStock } = req.body;

  const sku = new Sku({
    _id: new mongoose.Types.ObjectId(),
    brand,
    name,
    price,
    description,
    onHand,
    inStock,
  });

  return sku
    .save()
    .then((result) => {
      return res.status(201).json({ Sku: result });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

const getAllSkus = (req: Request, res: Response, next: NextFunction) => {
  Sku.find()
    .exec()
    .then((results) => {
      return res.status(200).json({
        Skus: results,
        count: results.length,
      });
    })
    .catch((error) => {
      message: error.message, error;
    });
};

export default { getAllSkus, createSku };
