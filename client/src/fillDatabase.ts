import data from "./data.json";

const fillDatabase = () => {
  data.categories.forEach((category) => {
    fetch("/api/categories/create/category", {
      method: "post",
      body: JSON.stringify({ name: category }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
  });
  data.items.forEach((item) => {
    fetch("/api/skus/create/sku", {
      method: "post",
      body: JSON.stringify(item),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
  });
};

fillDatabase();

// running this file will fill the database with 20 items
// that I got from 
