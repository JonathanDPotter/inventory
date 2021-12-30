"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTimeStamp = () => {
    return new Date().toISOString();
};
const info = (namespace, message, object = null) => {
    object
        ? console.log(`[${getTimeStamp()}][INFO][${namespace}] ${message}`, object)
        : console.log(`[${getTimeStamp()}][INFO][${namespace}] ${message}`);
};
const warn = (namespace, message, object = null) => {
    object
        ? console.warn(`[${getTimeStamp()}][warn][${namespace}] ${message}`, object)
        : console.warn(`[${getTimeStamp()}][warn][${namespace}] ${message}`);
};
const error = (namespace, message, object = null) => {
    object
        ? console.error(`[${getTimeStamp()}][error][${namespace}] ${message}`, object)
        : console.error(`[${getTimeStamp()}][error][${namespace}] ${message}`);
};
const debug = (namespace, message, object = null) => {
    object
        ? console.debug(`[${getTimeStamp()}][debug][${namespace}] ${message}`, object)
        : console.debug(`[${getTimeStamp()}][debug][${namespace}] ${message}`);
};
exports.default = { info, warn, error, debug };
