import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    setGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});
export const { setGptSearch } = gptSlice.actions;
export default gptSlice.reducer;
