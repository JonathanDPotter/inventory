"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const react_redux_1 = require("react-redux");
const store_1 = __importDefault(require("./store"));
// components
const App_1 = __importDefault(require("./App"));
react_dom_1.default.render(<react_1.default.StrictMode>
    <react_redux_1.Provider store={store_1.default}>
      <App_1.default />
    </react_redux_1.Provider>
  </react_1.default.StrictMode>, document.getElementById("root"));
