import React, { useEffect, useState } from "react";
import "./App.scss"

const App = () => {
  const [skus, setSkus] = useState<any>([]);

  useEffect(() => {
    fetch("/api/skus/get/skus").then((res) =>
      res.json().then((response) => setSkus(response.Skus))
    );
  }, []);

  console.log(skus);

  return (
    <div>
      Hello from React.
    </div>
  );
};

export default App;
