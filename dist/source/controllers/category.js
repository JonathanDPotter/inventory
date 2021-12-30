"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const categories_1 = __importDefault(require("../../models/categories"));
const NAMESPACE = "Category Controller";
const createCategory = (req, res, next) => {
    const { name } = req.body;
    const category = new categories_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
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
const getAllCategories = (req, res, next) => {
    categories_1.default.find()
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
const getCategory = (req, res, next) => {
    categories_1.default.findById(req.body.id)
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
const updateCategory = (req, res, next) => {
    categories_1.default.findByIdAndUpdate(req.body.id)
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
const deleteCategory = (req, res, next) => {
    categories_1.default.findByIdAndRemove(req.body.id)
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
exports.default = {
    createCategory,
    getAllCategories,
    getCategory,
    updateCategory,
    deleteCategory,
};
