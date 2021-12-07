import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import Sku from "../../models/skus";

const NAMESPACE = "Sku Controller";

const createSku = (req: Request, res: Response, next: NextFunction) => {
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

  let { category, brand, name, price, description, onHand } = req.body;

  const sku = new Sku({
    _id: new mongoose.Types.ObjectId(),
    category,
    brand,
    name,
    price,
    description,
    onHand,
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
