import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../features/rootReducer";
// import { setAutoFreeze } from "immer";

// Fixes "Cannot assign to read only property" error message
// when modifying objects from Redux state directly.
// https://github.com/reduxjs/redux-toolkit/issues/424
// setAutoFreeze(false);

export const store = configureStore({
  reducer: rootReducer,
});
