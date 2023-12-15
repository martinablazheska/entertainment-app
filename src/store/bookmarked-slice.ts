import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import content from "./data";
import { initiallyBookmarked } from "./data";
import contentUnit from "./types";

const initialBookmarks: contentUnit[] = initiallyBookmarked;

const bookmarkedSlice = createSlice({
  name: "bookmarked",
  initialState: {
    allBookmarks: initialBookmarks,
    displayedBookmarks: initialBookmarks,
    searchValue: "",
  },
  reducers: {
    toggleBookmark: (state, action: PayloadAction<string>) => {
      if (state.allBookmarks.find((c) => c.title === action.payload)) {
        state.allBookmarks = state.allBookmarks.filter(
          (c) => c.title !== action.payload
        );
      } else {
        state.allBookmarks.push(
          content.find((c) => c.title === action.payload) as contentUnit
        );
      }
      state.displayedBookmarks = state.allBookmarks;
      console.log(state.displayedBookmarks);
    },
    filterBookmarks: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
      if (state.searchValue === "") {
        state.displayedBookmarks = state.allBookmarks;
      } else {
        state.displayedBookmarks = state.allBookmarks.filter((c) =>
          c.title.toLowerCase().includes(state.searchValue.toLowerCase())
        );
      }
    },
  },
});

export default bookmarkedSlice;
export const { toggleBookmark, filterBookmarks } = bookmarkedSlice.actions;
