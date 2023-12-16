import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { movies as allMovies, series as allSeries, recommended } from "./data";

const initialState = {
  content: { displayed: recommended, searchValue: "" },
  movies: { displayed: allMovies, searchValue: "" },
  series: { displayed: allSeries, searchValue: "" },
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    filterContent: (state, action: PayloadAction<string>) => {
      state.content.searchValue = action.payload;
      if (state.content.searchValue === "") {
        state.content.displayed = initialState.content.displayed;
      } else {
        state.content.displayed = initialState.content.displayed.filter((c) =>
          c.title
            .toLowerCase()
            .includes(state.content.searchValue.toLowerCase())
        );
      }
    },
    filterMovies: (state, action: PayloadAction<string>) => {
      state.movies.searchValue = action.payload;
      if (state.movies.searchValue === "") {
        state.movies.displayed = initialState.movies.displayed;
      } else {
        state.movies.displayed = initialState.movies.displayed.filter((c) =>
          c.title.toLowerCase().includes(state.movies.searchValue.toLowerCase())
        );
      }
    },

    filterSeries: (state, action: PayloadAction<string>) => {
      state.series.searchValue = action.payload;
      if (state.series.searchValue === "") {
        state.series.displayed = initialState.series.displayed;
      } else {
        state.series.displayed = initialState.series.displayed.filter((c) =>
          c.title.toLowerCase().includes(state.series.searchValue.toLowerCase())
        );
      }
    },
    resetFilters: (state) => {
      state.content = initialState.content;
      state.movies = initialState.movies;
      state.series = initialState.series;
    },
  },
});

export default filterSlice;
export const { filterContent, filterMovies, filterSeries, resetFilters } =
  filterSlice.actions;
