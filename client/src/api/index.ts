import axios from "axios";
// types
import {
  InewCategory,
  IupdateCategory,
  IdeleteCategory,
} from "../interfaces/category";
import { InewSku, IupdateSku, IdeleteSku } from "../interfaces/sku";

const host = process.env.HOST || "http://localhost:1337";


export const getCategories = () => axios.get(host + "/api/categories/get/categories");

export const createCategory = (newCat: InewCategory) =>
  axios.post(host + "api/categories/create/category", newCat);

export const updateCategory = (update: IupdateCategory) =>
  axios.post(host + "/api/categories/update/category", update);

export const deleteCategory = (toDelete: IdeleteCategory) =>
  axios.post(host + "/api/categories/delete/category", toDelete);

export const getItems = () => axios.get(host + "/api/skus/get/skus");

export const createItem = (newSku: InewSku) =>
  fetch(host + "/api/skus/create/sku", {
    method: "POST",
    body: JSON.stringify(newSku),
    headers: new Headers({ "Content-Type": "application/json" }),
  })
    .then((response) => console.log(response))
    .catch((error) => console.error(error));

export const updateItem = (update: IupdateSku) =>
  axios.post(host + "/api/skus/update/sku", update);

export const deleteItem = (toDelete: IdeleteSku) =>
  axios.post(host + "/api/skus/delete/sku", toDelete);
