import { Request, Response, NextFunction } from "express";
import mongoose, { AnyKeys, ConnectionStates } from "mongoose";
import Sku from "../../models/skus";

const NAMESPACE = "Sku Controller";

const createSku = (req: Request, res: Response, next: NextFunction) => {
  const { category, name, price, description, onHand, image } = req.body;

  const sku = new Sku({
    _id: new mongoose.Types.ObjectId(),
    category,
    name,
    price,
    description,
    onHand,
    image,
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
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

const getSku = (req: Request, res: Response, next: NextFunction) => {
  Sku.findById(req.body.id)
    .exec()
    .then((result) => {
      return res.status(200).json({
        sku: result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

const updateSku = (req: Request, res: Response, next: NextFunction) => {
  Sku.findByIdAndUpdate(req.body.id, req.body.update)
    .exec()
    .then((result) => {
      return res.status(200).json({
        updated: result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

const deleteSku = (req: Request, res: Response, next: NextFunction) => {
  Sku.findByIdAndRemove(req.body.id)
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

export default { createSku, getAllSkus, getSku, updateSku, deleteSku };
