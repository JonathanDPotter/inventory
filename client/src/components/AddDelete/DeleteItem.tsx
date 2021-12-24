import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import ItemCard from "../ItemCard/ItemCard";
// styles
import "./AddDelete.scss";

const DeletItem = () => {
  const { skus } = useSelector((state: RootState) => state.skus);
  const navigate = useNavigate();

  const rerender = () => {
    navigate(0);
  };

  return (
    <div className="full-page">
      <div className="item-cards-container">
        {skus &&
          skus.map((sku, i) => (
            <ItemCard sku={sku} key={i} rerender={rerender} />
          ))}
      </div>
    </div>
  );
};

export default DeletItem;
