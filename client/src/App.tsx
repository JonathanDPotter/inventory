import React, { useEffect, useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Isku from "./interfaces/sku";

const App = () => {

  const [skus, setSkus] = useState<Isku[]>([]);

  useEffect(() => {
    fetch("/api/skus/get/skus").then((res) =>
      res.json().then((response) => setSkus(response.Skus))
    );
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
