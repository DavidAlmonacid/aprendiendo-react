import {
  configureStore,
  type Middleware,
  type PayloadAction
} from "@reduxjs/toolkit";
import { toast } from "sonner";
import usersReducer from "./users/slice.ts";

const persistanceLocalStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    next(action);
    localStorage.setItem("users_redux_state", JSON.stringify(store.getState()));
  };

const syncWithDatabaseMiddleware: Middleware =
  (store) => (next) => (action) => {
    if (
      typeof action === "object" &&
      action !== null &&
      "type" in action &&
      action.type === "users/deleteUserById"
    ) {
      const typedAction = action as PayloadAction<string>;
      const { payload } = typedAction;

      next(action);

      fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
        method: "DELETE"
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error deleting user");
          }

          toast.success("User deleted successfully");
        })
        .catch((error) => {
          toast.error(error.message);
        });
    } else {
      next(action);
    }
  };

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(persistanceLocalStorageMiddleware)
      .concat(syncWithDatabaseMiddleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
