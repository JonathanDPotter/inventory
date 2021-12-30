"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = void 0;
const capitalize = (name) => {
    const first = name[0];
    const rest = name.slice(1);
    return first.toUpperCase() + rest;
};
exports.capitalize = capitalize;
