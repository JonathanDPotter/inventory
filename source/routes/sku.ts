import express from "express";
import controller from "../controllers/sku";

const router = express.Router();

router.post('/create/sku', controller.createSku)

router.get("/get/skus", controller.getAllSkus);

export = router;