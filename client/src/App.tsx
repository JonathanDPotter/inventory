import React, { useEffect, useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import data from "./data.json";
import Isku from "./interfaces/sku";

const App = () => {
  // uncomment invocation in useEffect to fill the database
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  const [skus, setSkus] = useState<Isku[]>([]);

  useEffect(() => {
    fetch("/api/skus/get/skus").then((res) =>
      res.json().then((response) => setSkus(response.Skus))
    );

    // run once to fill database
    // fillDatabase()
  }, []);

  return (
    <div>
      <Navbar />
      {skus &&
        skus.map((sku: Isku) => {
          return (
            <div className="item-card" key={sku.id} id={sku.id}>
              <p className="name">{sku.name}</p>
              <p className="description">{sku.description}</p>
            </div>
          );
        })}
    </div>
  );
};

export default App;
