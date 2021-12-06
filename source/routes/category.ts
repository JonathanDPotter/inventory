import express from "express";
import controller from "../controllers/category";

const router = express.Router();

router.post("/create/category", controller.createCategory);

router.get("/get/Categories", controller.getAllCategories);

export = router;
