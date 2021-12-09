import React, { useEffect, useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [skus, setSkus] = useState<any>([]);

  useEffect(() => {
    fetch("/api/skus/get/skus").then((res) =>
      res.json().then((response) => setSkus(response.Skus))
    );
  }, []);

  console.log(skus);

  return <Navbar />;
};

export default App;
