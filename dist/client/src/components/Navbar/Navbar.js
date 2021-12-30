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
// components
const MenuItem_1 = __importDefault(require("./MenuItem"));
const Submenu_1 = __importDefault(require("./Submenu"));
require("./Navbar.scss");
const react_redux_1 = require("react-redux");
const Navbar = () => {
    const [submenuOneOpen, setSubmenuOneOpen] = (0, react_1.useState)(false);
    const [submenuTwoOpen, setSubmenuTwoOpen] = (0, react_1.useState)(false);
    const [submenuThreeOpen, setSubmenuThreeOpen] = (0, react_1.useState)(false);
    const categories = (0, react_redux_1.useSelector)((state) => state.categories.categories);
    return (<nav>
      <div className="menu-container">
        <ul className="menu">
          <li className="options" onMouseEnter={() => setSubmenuOneOpen(true)} onMouseLeave={() => setSubmenuOneOpen(false)}>
            <MenuItem_1.default open={submenuOneOpen} text="Categories"/>
            <Submenu_1.default open={submenuOneOpen} categories={categories}/>
          </li>
          <li className="options" onMouseEnter={() => setSubmenuTwoOpen(true)} onMouseLeave={() => setSubmenuTwoOpen(false)}>
            <MenuItem_1.default open={submenuTwoOpen} text="Add/Delete"/>
            <Submenu_1.default open={submenuTwoOpen} title="add-delete" items={[{ text: "add" }, { text: "delete" }]}/>
          </li>
          <li className="options" onMouseEnter={() => setSubmenuThreeOpen(true)} onMouseLeave={() => setSubmenuThreeOpen(false)}>
            <MenuItem_1.default open={submenuThreeOpen} text="About"/>
            <Submenu_1.default open={submenuThreeOpen} title="About" items={[{ text: "About" }]}/>
          </li>
        </ul>
      </div>
      <div className="title-container">
        <h1>Inventory</h1>
      </div>
    </nav>);
};
exports.default = Navbar;
