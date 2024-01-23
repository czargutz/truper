import { configureStore } from "@reduxjs/toolkit";

import reducerSlice from "./reducer";

const rootReducer = {
  defaultReducer: reducerSlice,
};

export const store = configureStore({
  reducer: rootReducer,
});
