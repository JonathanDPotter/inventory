"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_1 = require("react-router");
const api_1 = require("../../api");
// styles
require("./AddDelete.scss");
const AddItem = () => {
    const navigate = (0, react_router_1.useNavigate)();
    const [category, setCategory] = (0, react_1.useState)("electronics");
    const [name, setName] = (0, react_1.useState)("");
    const [description, setDescription] = (0, react_1.useState)("");
    const [price, setPrice] = (0, react_1.useState)(0);
    const [onHand, setOnHand] = (0, react_1.useState)(0);
    const [image, setImage] = (0, react_1.useState)("");
    const handleChange = (event) => {
        const { value, id } = event.target;
        switch (id) {
            case "category":
                setCategory(value);
                break;
            case "name":
                setName(value);
                break;
            case "description":
                setDescription(value);
                break;
            case "price":
                setPrice(parseFloat(value));
                break;
            case "on-hand":
                setOnHand(parseInt(value));
                break;
            case "image":
                setImage(value);
                break;
            default:
                break;
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const newSku = {
            category,
            name,
            description,
            price,
            onHand,
            image,
        };
        (0, api_1.createItem)(newSku).catch((error) => {
            if (error) {
                window.alert(error);
            }
        });
        navigate(0);
    };
    return (<div className="full-page">
      <h1 className="title">Add new Item</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <div className="label-input">
          <label htmlFor="category">Category: </label>
          <select name="category" id="category" value={category} required onChange={handleChange}>
            <option value="electronics">Electronics</option>
            <option value="jewelry">Jewelry</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="men's clothing">Men's Clothing</option>
          </select>
        </div>
        <div className="label-input">
          <label htmlFor="name">Item Name: </label>
          <input type="text" name="name" id="name" value={name} required onChange={handleChange}/>
        </div>
        <div className="label-input">
          <label htmlFor="description">Description: </label>
          <textarea name="description" id="description" value={description} required onChange={handleChange}/>
        </div>
        <div className="label-input">
          <label htmlFor="price">Price: </label>
          <input type="number" min="0.01" step="0.01" name="price" id="price" value={price} required onChange={handleChange}/>
        </div>
        <div className="label-input">
          <label htmlFor="on-hand">On Hand: </label>
          <input type="number" min="1" step="1" name="on-hand" id="on-hand" value={onHand} required onChange={handleChange}/>
        </div>
        <div className="label-input">
          <label htmlFor="image">Image URL: </label>
          <input type="text" name="image" id="image" value={image} required onChange={handleChange}/>
        </div>
        <input type="submit" value="Submit" className="button"/>
      </form>
    </div>);
};
exports.default = AddItem;
