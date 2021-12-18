import {
  combineReducers,
  configureStore,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Isku } from "../interfaces/sku";
import { Icategory } from "../interfaces/category";

interface IskuSliceState {
  skus: Isku[];
}

const initialState: IskuSliceState = {
  skus: [],
};

export const skuSlice = createSlice({
  name: "skus",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addSku: (state, action: PayloadAction<Isku>) => {
      state.skus = [...state.skus, action.payload];
    },
  },
});

interface IcatSliceState {
  categories: Icategory[];
}

const catInitialState: IcatSliceState = {
  categories: [],
};

export const catSlice = createSlice({
  name: "categories",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: catInitialState,
  reducers: {
    addCat: (state, action: PayloadAction<Icategory>) => {
      state.categories = [...state.categories, action.payload];
    },
  },
});

export const { addSku } = skuSlice.actions;

export const { addCat } = catSlice.actions;

const rootReducer = combineReducers({
  skus: skuSlice.reducer,
  categories: catSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
