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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const functions_1 = require("../../functions");
const ItemCard_1 = __importDefault(require("../ItemCard/ItemCard"));
// styles
require("./ItemPage.scss");
const ItemPages = () => {
    const skus = (0, react_redux_1.useSelector)((state) => state.skus.skus);
    const categories = (0, react_redux_1.useSelector)((state) => state.categories.categories);
    const { category } = (0, react_router_dom_1.useParams)();
    const current = categories === null || categories === void 0 ? void 0 : categories.find((cat) => cat.name === category);
    const [currentSkus, setCurrentSkus] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        if (category !== "all") {
            setCurrentSkus(skus === null || skus === void 0 ? void 0 : skus.filter((sku) => sku.category === (current === null || current === void 0 ? void 0 : current.name)));
        }
        else {
            skus && setCurrentSkus(skus);
        }
    }, [skus, category, current]);
    return (<div className="item page">
      <h1 className="page-title">{category && (0, functions_1.capitalize)(category)}</h1>
      {currentSkus &&
            currentSkus.map((sku, i) => {
                return <ItemCard_1.default sku={sku} key={i}/>;
            })}
    </div>);
};
exports.default = ItemPages;
