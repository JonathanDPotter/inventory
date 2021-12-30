"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const api_1 = require("../../api");
const ItemCard = ({ sku, rerender }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const deleteItemCall = () => {
        if (window.confirm(`Delete ${sku.name}?`)) {
            (0, api_1.deleteItem)({ id: sku._id });
        }
        rerender();
    };
    const editItem = () => {
        navigate(`/edit/${sku._id}`);
    };
    return (<div className="item-card">
      <img src={sku.image} alt={sku.name}/>
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
    </div>);
};
exports.default = ItemCard;
