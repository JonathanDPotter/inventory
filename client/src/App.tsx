import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCategories, getItems } from "./api";
import { addCat, addSku } from "./store";
// components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ItemPages from "./components/ItemPages/ItemPages";
import AddItem from "./components/AddDelete/AddItem";
import DeleteItem from "./components/AddDelete/DeleteItem";
import ItemEdit from "./components/ItemEdit/ItemEdit";
// types
import { Icategory } from "./interfaces/category";
import { Isku } from "./interfaces/sku";
// styles
import "./App.scss";
import About from "./components/About/About";
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
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items/:category" element={<ItemPages />} />
        <Route path="/add-delete/add" element={<AddItem />} />
        <Route path="/add-delete/delete" element={<DeleteItem />} />
        <Route path="/edit/:edit" element={<ItemEdit />} />
        <Route path="/about/about" element={<About />} />
        <Route path="*" element={<h1 className="title">404 not found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
