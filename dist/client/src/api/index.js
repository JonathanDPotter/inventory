"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.createItem = exports.getItems = exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategories = void 0;
const axios_1 = __importDefault(require("axios"));
const host = process.env.HOST || "http://localhost:1337";
const getCategories = () => axios_1.default.get(host + "/api/categories/get/categories");
exports.getCategories = getCategories;
const createCategory = (newCat) => axios_1.default.post(host + "api/categories/create/category", newCat);
exports.createCategory = createCategory;
const updateCategory = (update) => axios_1.default.post(host + "/api/categories/update/category", update);
exports.updateCategory = updateCategory;
const deleteCategory = (toDelete) => axios_1.default.post(host + "/api/categories/delete/category", toDelete);
exports.deleteCategory = deleteCategory;
const getItems = () => axios_1.default.get(host + "/api/skus/get/skus");
exports.getItems = getItems;
const createItem = (newSku) => fetch(host + "/api/skus/create/sku", {
    method: "POST",
    body: JSON.stringify(newSku),
    headers: new Headers({ "Content-Type": "application/json" }),
})
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
exports.createItem = createItem;
const updateItem = (id, update) => fetch(host + "/api/skus/update/sku", {
    method: "POST",
    body: JSON.stringify({ update, id }),
    headers: new Headers({ "Content-Type": "application/json" }),
})
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
exports.updateItem = updateItem;
const deleteItem = (toDelete) => axios_1.default.post(host + "/api/skus/delete/sku", toDelete);
exports.deleteItem = deleteItem;
