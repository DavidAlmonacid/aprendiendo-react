import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/slice.ts";

export const store = configureStore({
  reducer: {
    users: usersReducer
  }
});
