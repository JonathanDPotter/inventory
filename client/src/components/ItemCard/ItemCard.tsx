import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { deleteItem } from "../../api";
import { Isku } from "../../interfaces/sku";

interface IitemCardProps {
  sku: Isku;
  key: number;
  rerender?: any;
}

const ItemCard: FC<IitemCardProps> = ({ sku, rerender }) => {
  const navigate = useNavigate();

  const deleteItemCall = () => {
    deleteItem({ id: sku._id });
    rerender();
  };

  const editItem = () => {
    navigate(`/edit/${sku._id}`);
  };

  return (
    <div className="item-card">
      <img src={sku.image} alt={sku.name} />
      <button onClick={deleteItemCall} className="delete">
        delete
      </button>
      <div className="name-description">
        <h2>{sku.name}</h2>
        <p>{sku.description.slice(0, 100)}...</p>
      </div>
      <div className="onhand-price">
        <span>On hand: {sku.onHand}</span>
        <span>${sku.price.toFixed(2)}</span>
        <button onClick={editItem} className="edit">
          Edit
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
