import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// types
import { RootState, skuSlice } from "../../store";
import { Isku } from "../../interfaces/sku";
// styles
import "./ItemEdit.scss";

const ItemEdit: FC = () => {
  const { edit } = useParams();
  const skus = useSelector<RootState, Isku[]>((state) => state.skus.skus);
  const [sku, setSku] = useState<Isku | undefined>(undefined);

  useEffect(() => {
    if (!sku) {
      setSku(skus.find((sku) => sku._id === edit));
    }
  }, [edit, sku, skus]);

  return (
    <div className="item-card">
      <img src={sku?.image} alt={sku?.name} />
      <div className="name-description">
        <h2>{sku?.name}</h2>
        <p>{sku?.description.slice(0, 100)}...</p>
      </div>
      <div className="onhand-price">
        <span>On hand: {sku?.onHand}</span>
        <span>${sku?.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ItemEdit;
