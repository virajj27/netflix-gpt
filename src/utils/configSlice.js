import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    currLang: "english",
  },
  reducers: {
    setLanguage: (state, action) => {
      state.currLang = action.payload;
    },
  },
});
export const { setLanguage } = configSlice.actions;
export default configSlice.reducer;
