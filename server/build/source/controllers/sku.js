"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const skus_1 = __importDefault(require("../../models/skus"));
const NAMESPACE = "Sku Controller";
const createSku = (req, res, next) => {
    const { category, name, price, description, onHand, image } = req.body;
    const sku = new skus_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
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
        return res.status(201).json({ sku: result });
    })
        .catch((error) => {
        return res.status(500).json({
            message: error.message,
            error,
        });
    });
};
const getAllSkus = (req, res, next) => {
    skus_1.default.find()
        .exec()
        .then((results) => {
        return res.status(200).json({
            skus: results,
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
const getSku = (req, res, next) => {
    skus_1.default.findById(req.body.id)
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
const updateSku = (req, res, next) => {
    console.log(req.body);
    skus_1.default.findByIdAndUpdate(req.body.id, req.body.update)
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
const deleteSku = (req, res, next) => {
    console.log(`delete Id: ${req.body.id}`);
    skus_1.default.findOneAndDelete({ _id: req.body.id })
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
exports.default = { createSku, getAllSkus, getSku, updateSku, deleteSku };
