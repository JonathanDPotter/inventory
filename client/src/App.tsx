import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
// components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ItemPages from "./components/ItemPages/ItemPages";
// types
import { Icategory } from "./interfaces/category";
import { Isku } from "./interfaces/sku";
// styles
import "./App.scss";
import { getCategories, getItems } from "./api";
// run once to fill database
// import { fillDatabase } from "./fillDatabase";

const App = () => {
  const [categories, setCategories] = useState<Icategory[] | null>(null);
  const [skus, setSkus] = useState<Isku[] | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems);
    getCategories().then((response) => {
      setCategories(response.data.categories);
    });

    getItems().then((response) => {
      setSkus(response.data.skus);
    });

    // run once to fill database
    // fillDatabase();
  }, [dispatch]);

  return (
    <div>
      <Router>
        <Navbar categories={categories && categories} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/items/:category"
            element={
              <ItemPages
                categories={categories && categories}
                skus={skus && skus}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
