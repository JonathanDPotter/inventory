import express from "express";
import controller from "../controllers/sku";

const router = express.Router();

router.post("/create/sku", controller.createSku);

router.post("/update/sku", controller.updateSku)

router.get("/get/skus", controller.getAllSkus);

router.get("/get/sku", controller.getSku);

export = router;
