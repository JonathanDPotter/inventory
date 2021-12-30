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
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
// functions
const api_1 = require("../../api");
// styles
require("./ItemEdit.scss");
const ItemEdit = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { edit } = (0, react_router_dom_1.useParams)();
    const skus = (0, react_redux_1.useSelector)((state) => state.skus.skus);
    const [sku, setSku] = (0, react_1.useState)(undefined);
    const [category, setCategory] = (0, react_1.useState)("");
    const [image, setImage] = (0, react_1.useState)("");
    const [name, setName] = (0, react_1.useState)("");
    const [description, setDescription] = (0, react_1.useState)("");
    const [onHand, setOnHand] = (0, react_1.useState)(0);
    const [price, setPrice] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        if (!sku) {
            setSku(skus.find((sku) => sku._id === edit));
        }
        else {
            setCategory(sku.category);
            setImage(sku.image);
            setName(sku.name);
            setDescription(sku.description);
            setOnHand(sku.onHand);
            setPrice(sku.price);
        }
    }, [edit, sku, skus]);
    const handleChange = (event) => {
        const { id, value } = event.target;
        switch (id) {
            case "category":
                setCategory(value);
                break;
            case "image":
                setImage(value);
                break;
            case "name":
                setName(value);
                break;
            case "description":
                setDescription(value);
                break;
            case "on-hand":
                setOnHand(value);
                break;
            case "price":
                setPrice(value);
                break;
            default:
                break;
        }
    };
    const onSubmit = (event) => {
        event.preventDefault();
        const updateSku = {
            category,
            name,
            description,
            onHand,
            price,
            image,
        };
        (0, api_1.updateItem)(sku === null || sku === void 0 ? void 0 : sku._id, updateSku);
        navigate("/");
    };
    return (<div className="item-card">
      <form action="submit" onSubmit={onSubmit}>
        <img src={sku === null || sku === void 0 ? void 0 : sku.image} alt={sku === null || sku === void 0 ? void 0 : sku.name}/>
        <div className="label-input">
          <label htmlFor="image">Image URL: </label>
          <input type="text" name="image" id="image" onChange={handleChange} value={image}/>
        </div>
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
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" onChange={handleChange} value={name}/>
        </div>
        <div className="label-input">
          <label htmlFor="description">Description: </label>
          <textarea name="description" id="description" cols={30} rows={10} onChange={handleChange} value={description}></textarea>
        </div>
        <div className="label-input">
          <label htmlFor="on-hand">On Hand: </label>
          <input type="number" name="on-hand" id="on-hand" onChange={handleChange} value={onHand}/>
        </div>
        <div className="label-input">
          <label htmlFor="price">Price: </label>
          <input type="number" name="price" id="price" onChange={handleChange} value={price}/>
        </div>
        <input type="submit" value="Update Item"/>
      </form>
    </div>);
};
exports.default = ItemEdit;
