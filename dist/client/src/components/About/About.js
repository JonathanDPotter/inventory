"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// styles
require("./About.scss");
const About = () => {
    return (<div className="full-page">
      <h1>About this Website</h1>
      <p className="about-text">
        This site is a fake inventory management app with full CRUD
        functionality.
      </p>
      <p>
        The server is written in typescript with express and the front end is
        written in typescript with React.
      </p>
      <p>
        You can find it on github
        <a href="https://github.com/JonathanDPotter/inventory"> here</a>.
      </p>
    </div>);
};
exports.default = About;
