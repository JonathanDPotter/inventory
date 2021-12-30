"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCat = exports.addSku = exports.catSlice = exports.skuSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    skus: [],
};
exports.skuSlice = (0, toolkit_1.createSlice)({
    name: "skus",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addSku: (state, action) => {
            state.skus = [...state.skus, action.payload];
        },
    },
});
const catInitialState = {
    categories: [],
};
exports.catSlice = (0, toolkit_1.createSlice)({
    name: "categories",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState: catInitialState,
    reducers: {
        addCat: (state, action) => {
            state.categories = [...state.categories, action.payload];
        },
    },
});
exports.addSku = exports.skuSlice.actions.addSku;
exports.addCat = exports.catSlice.actions.addCat;
const rootReducer = (0, toolkit_1.combineReducers)({
    skus: exports.skuSlice.reducer,
    categories: exports.catSlice.reducer,
});
const store = (0, toolkit_1.configureStore)({
    reducer: rootReducer,
});
exports.default = store;
