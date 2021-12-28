import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/items/all");
  }, [navigate]);

  return <></>;
};

export default Home;
