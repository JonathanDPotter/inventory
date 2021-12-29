import express from "express";
import controller from "../controllers/sku";

const router = express.Router();

const { createSku, getAllSkus, getSku, updateSku, deleteSku } = controller;

router.post("/create/sku", createSku);

router.get("/get/skus", getAllSkus);

router.get("/get/sku", getSku);

router.post("/update/sku", updateSku);

router.post("/delete/sku", deleteSku);

export = router;
