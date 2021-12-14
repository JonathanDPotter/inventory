import axios from "axios";
// types
import {
  InewCategory,
  IupdateCategory,
  IdeleteCategory,
} from "../interfaces/category";
import { InewSku, IupdateSku, IdeleteSku } from "../interfaces/sku";

export const getCategories = () => axios.get("/api/categories/get/categories");

export const createCategory = (newCat: InewCategory) =>
  axios.post("api/categories/create/category", newCat);

export const updateCategory = (update: IupdateCategory) =>
  axios.post("/api/categories/update/category", update);

export const deleteCategory = (toDelete: IdeleteCategory) =>
  axios.post("/api/categories/delete/category", toDelete);

export const getItems = () => axios.get("/api/skus/get/skus");

export const createItem = (newCat: InewSku) =>
  axios.post("api/categories/create/sku", newCat);

export const updateItem = (update: IupdateSku) =>
  axios.post("/api/categories/update/sku", update);

export const deleteItem = (toDelete: IdeleteSku) =>
  axios.post("/api/categories/delete/sku", toDelete);
