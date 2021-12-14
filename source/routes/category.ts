import express from "express";
import controller from "../controllers/category";

const router = express.Router();

const {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} = controller;

router.post("/create/category", createCategory);

router.get("/get/categories", getAllCategories);

router.get("/get/category", getCategory);

router.post("update/category", updateCategory);

router.post("/delete/category", deleteCategory);

export = router;
