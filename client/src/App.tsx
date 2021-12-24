import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCategories, getItems } from "./api";
import { addCat, addSku } from "./store";
// components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ItemPages from "./components/ItemPages/ItemPages";
import AddItem from "./components/AddDelete/AddItem";
import DeleteItem from "./components/AddDelete/DeleteItem";
// types
import { Icategory } from "./interfaces/category";
import { Isku } from "./interfaces/sku";
// styles
import "./App.scss";
// run once to fill database
// import { fillDatabase } from "./fillDatabase";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getCategories().then((response) => {
      const { categories } = response.data;
      categories.forEach((category: Icategory) => dispatch(addCat(category)));
    });

    getItems().then((response) => {
      const { skus } = response.data;
      skus.forEach((sku: Isku) => dispatch(addSku(sku)));
    });

    // run once to fill database
    // fillDatabase();
  }, [dispatch]);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/items/:category" element={<ItemPages />} />
          <Route path="/add-delete/add" element={<AddItem />} />
          <Route path="/add-delete/delete" element={<DeleteItem />} />
          <Route path="*" element={<h1 className="title">404 not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
