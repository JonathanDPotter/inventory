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
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const api_1 = require("./api");
const store_1 = require("./store");
// components
const Navbar_1 = __importDefault(require("./components/Navbar/Navbar"));
const Home_1 = __importDefault(require("./components/Home/Home"));
const ItemPages_1 = __importDefault(require("./components/ItemPages/ItemPages"));
const AddItem_1 = __importDefault(require("./components/AddDelete/AddItem"));
const DeleteItem_1 = __importDefault(require("./components/AddDelete/DeleteItem"));
const ItemEdit_1 = __importDefault(require("./components/ItemEdit/ItemEdit"));
// styles
require("./App.scss");
const About_1 = __importDefault(require("./components/About/About"));
// run once to fill database
// import { fillDatabase } from "./fillDatabase";
const App = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(() => {
        (0, api_1.getCategories)().then((response) => {
            const { categories } = response.data;
            categories.forEach((category) => dispatch((0, store_1.addCat)(category)));
        });
        (0, api_1.getItems)().then((response) => {
            const { skus } = response.data;
            skus.forEach((sku) => dispatch((0, store_1.addSku)(sku)));
        });
        // run once to fill database
        // fillDatabase();
    }, [dispatch]);
    return (<div>
      <react_router_dom_1.BrowserRouter>
        <Navbar_1.default />
        <react_router_dom_1.Routes>
          <react_router_dom_1.Route path="/" element={<Home_1.default />}></react_router_dom_1.Route>
          <react_router_dom_1.Route path="/items/:category" element={<ItemPages_1.default />}/>
          <react_router_dom_1.Route path="/add-delete/add" element={<AddItem_1.default />}/>
          <react_router_dom_1.Route path="/add-delete/delete" element={<DeleteItem_1.default />}/>
          <react_router_dom_1.Route path="/edit/:edit" element={<ItemEdit_1.default />}/>
          <react_router_dom_1.Route path="/about/about" element={<About_1.default />}/>
          <react_router_dom_1.Route path="*" element={<h1 className="title">404 not found</h1>}/>
        </react_router_dom_1.Routes>
      </react_router_dom_1.BrowserRouter>
    </div>);
};
exports.default = App;
