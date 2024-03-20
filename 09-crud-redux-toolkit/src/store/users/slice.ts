import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User, UserId, UserWithId } from "../../types/types.d.ts";

const DEFAULT_STATE = [
  {
    id: "1",
    name: "David Almonacid",
    email: "david.almonacid@example.com",
    role: "React Developer"
  },
  {
    id: "2",
    name: "Albert Rösti",
    email: "albert.roesti@example.com",
    role: "Designer"
  },
  {
    id: "3",
    name: "Beat Jans",
    email: "beat.jans@example.com",
    role: "Database Administrator"
  },
  {
    id: "4",
    name: "Ignazio Cassis",
    email: "ignazio.cassis@example.com",
    role: "UI/UX Engineer"
  },
  {
    id: "5",
    name: "Karin Keller-Sutter",
    email: "karin.keller-sutter@example.com",
    role: "SEO Specialist"
  },
  {
    id: "6",
    name: "Guy Parmelin",
    email: "guy.parmelin@example.com",
    role: "QA Engineer"
  },
  {
    id: "7",
    name: "Elisabeth Baume-Schneider",
    email: "elisabeth.baume-schneider@example.com",
    role: "DevOps Engineer"
  }
];

const initialState = ((): UserWithId[] => {
  const persistedState = localStorage.getItem("users_redux_state");

  if (persistedState) {
    const { users } = JSON.parse(persistedState);
    return users;
  }

  return DEFAULT_STATE;
})();

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID();
      return [...state, { id, ...action.payload }];
    },
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    }
  }
});

export default userSlice.reducer;
export const { addNewUser, deleteUserById } = userSlice.actions;
