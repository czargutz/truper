import { createSlice } from "@reduxjs/toolkit";

export const defaultSlice = createSlice({
  name: "defaultReducer",
  initialState: {
    session: null,
    data: [],
  },
  reducers: {
    addQualityData: (state, { payload }) => {
      state.data = payload;
    },
    saveSession: (state, { payload }) => {
      state.session = payload;
    },
  },
});

export const { addQualityData, saveSession } = defaultSlice.actions;

export default defaultSlice.reducer;
