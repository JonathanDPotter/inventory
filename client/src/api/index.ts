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

export const createItem = (newSku: InewSku) =>
  fetch("/api/skus/create/sku", {
    method: "POST",
    body: JSON.stringify(newSku),
    headers: new Headers({ "Content-Type": "application/json" }),
  })
    .then((response) => console.log(response))
    .catch((error) => console.error(error));

export const updateItem = (id: string, update: IupdateSku) =>
  fetch("/api/skus/update/sku", {
    method: "POST",
    body: JSON.stringify({ update, id }),
    headers: new Headers({ "Content-Type": "application/json" }),
  })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

export const deleteItem = (toDelete: IdeleteSku) =>
  axios.post("/api/skus/delete/sku", toDelete);
