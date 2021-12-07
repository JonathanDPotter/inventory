import express from "express";
import controller from "../controllers/category";

const router = express.Router();

router.post("/create/category", controller.createCategory);

router.get("/get/categories", controller.getAllCategories);

router.get("/get/category", controller.getCategory);

export = router;
