import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ItemPages from "./components/ItemPages/ItemPages";
// types
import Icategory from "./interfaces/category";
import Isku from "./interfaces/sku";
// styles
import "./App.scss";

const App = () => {
  const [categories, setCategories] = useState<Icategory[] | null>(null);
  const [skus, setSkus] = useState<Isku[] | null>(null);

  useEffect(() => {
    fetch("/api/categories/get/categories").then((response) => {
      response.json().then((data) => {
        setCategories(data.categories);
      })
    })

    fetch("/api/skus/get/skus").then((response) => {
      response.json().then((data) => {
        setSkus(data.skus);
      })
    })
  }, [])

  return (
    <div>
      <Router>
        <Navbar categories={categories && categories }/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/items/:category" element={<ItemPages categories={categories && categories} skus={skus && skus}/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
