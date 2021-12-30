"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const ItemCard_1 = __importDefault(require("../ItemCard/ItemCard"));
// styles
require("./AddDelete.scss");
const DeletItem = () => {
    const { skus } = (0, react_redux_1.useSelector)((state) => state.skus);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const rerender = () => {
        navigate(0);
    };
    return (<div className="full-page">
      <div className="item-cards-container">
        {skus &&
            skus.map((sku, i) => (<ItemCard_1.default sku={sku} key={i} rerender={rerender}/>))}
      </div>
    </div>);
};
exports.default = DeletItem;
