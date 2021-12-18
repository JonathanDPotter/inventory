import React, { FC } from "react";
import { Isku } from "../../interfaces/sku";

interface IitemCardProps {
  sku: Isku;
  key: number;
}

const ItemCard: FC<IitemCardProps> = ({ sku }) => {
  return (
    <div className="item-card" key={sku.id}>
      <img src={sku.image} alt={sku.name} />
      <div className="name-description">
        <h2>{sku.name}</h2>
        <p>{sku.description}</p>
      </div>
      <div className="onhand-price">
        <span>{sku.onHand}</span>
        <span>${sku.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ItemCard;
