import { configureStore } from "@reduxjs/toolkit";
import bookmarkedSlice from "./bookmarked-slice";
import filterSlice from "./filter-slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    bookmarks: bookmarkedSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
