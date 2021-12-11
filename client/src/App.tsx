import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
// types
import Icategory from "./interfaces/category";
// styles
import "./App.scss";

const App = () => {
  const [categories, setCategories] = useState<Icategory[] | null>(null);

  useEffect(() => {
    fetch("/api/categories/get/categories").then((response) => {
      response.json().then((data) => {
        setCategories(data.categories);
      })
    })
  }, [])

  return (
    <div>
      <Router>
        <Navbar categories={categories && categories }/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
