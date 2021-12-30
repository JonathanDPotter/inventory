"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const functions_1 = require("../../functions");
const Submenu = ({ open, categories, items, title }) => {
    return (<ul className={`sub-menu ${open ? "open" : "closed"}`}>
      {categories &&
            categories.map((category, i) => {
                const { name } = category;
                return (<a href={`/items/${name}`} key={i}>
              <li className="submenu-item">{(0, functions_1.capitalize)(name)}</li>
            </a>);
            })}
      {items &&
            items.map((item, i) => {
                const { text } = item;
                return (<a href={`/${title}/${text}`} key={i}>
              <li className="submenu-item">{(0, functions_1.capitalize)(text)}</li>
            </a>);
            })}
      {categories && (<a href="/items/all">
          <li> All Items</li>
        </a>)}
    </ul>);
};
exports.default = Submenu;
