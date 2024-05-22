import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    gptResult: null,
  },
  reducers: {
    setGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieName, movieResult } = action.payload;
      state.gptMovies = movieName;
      state.gptResult = movieResult;
    },
  },
});
export const { setGptSearch } = gptSlice.actions;
export default gptSlice.reducer;
