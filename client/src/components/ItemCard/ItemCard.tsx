import React, { FC } from "react";
import { deleteItem } from "../../api";
import { Isku } from "../../interfaces/sku";

interface IitemCardProps {
  sku: Isku;
  key: number;
  rerender?: any;
}

const ItemCard: FC<IitemCardProps> = ({ sku, rerender }) => {
  const deleteItemCall = () => {
    deleteItem({ id: sku._id });
    rerender();
  };

  return (
    <div className="item-card">
      <img src={sku.image} alt={sku.name} />
      <button onClick={deleteItemCall}>delete </button>
      <div className="name-description">
        <h2>{sku.name}</h2>
        <p>{sku.description.slice(0, 100)}...</p>
      </div>
      <div className="onhand-price">
        <span>On hand: {sku.onHand}</span>
        <span>${sku.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ItemCard;
