"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const sku_1 = __importDefault(require("../controllers/sku"));
const router = express_1.default.Router();
const { createSku, getAllSkus, getSku, updateSku, deleteSku } = sku_1.default;
router.post("/create/sku", createSku);
router.get("/get/skus", getAllSkus);
router.get("/get/sku", getSku);
router.post("/update/sku", updateSku);
router.post("/delete/sku", deleteSku);
module.exports = router;
