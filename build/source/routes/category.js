"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const category_1 = __importDefault(require("../controllers/category"));
const router = express_1.default.Router();
const { createCategory, getAllCategories, getCategory, updateCategory, deleteCategory, } = category_1.default;
router.post("/create/category", createCategory);
router.get("/get/categories", getAllCategories);
router.get("/get/category", getCategory);
router.post("update/category", updateCategory);
router.post("/delete/category", deleteCategory);
module.exports = router;
