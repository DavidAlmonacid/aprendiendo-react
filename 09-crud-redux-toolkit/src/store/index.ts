import {
  configureStore,
  type Middleware,
  type PayloadAction
} from "@reduxjs/toolkit";
import { toast } from "sonner";
import usersReducer, { rollbackDeleteUserById } from "./users/slice.ts";
import type { UserWithId } from "../types/types";

const persistanceLocalStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    next(action);
    localStorage.setItem("users_redux_state", JSON.stringify(store.getState()));
  };

const syncWithDatabaseMiddleware: Middleware =
  (store) => (next) => (action) => {
    const { type, payload } = action as PayloadAction<string>;
    const users: UserWithId[] = store.getState().users;

    next(action);

    if (type === "users/deleteUserById") {
      const userIdToDelete = payload;
      const userToDelete = users.find((user) => user.id === userIdToDelete);

      fetch(`https://jsonplaceholder.typicode.com/users/${userIdToDelete}`, {
        method: "DELETE"
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error deleting user");
          }

          toast.success("User deleted successfully");
        })
        .catch(() => {
          toast.error("Error deleting user with id: " + userIdToDelete);

          if (userToDelete) {
            store.dispatch(rollbackDeleteUserById(userToDelete));
          }
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
