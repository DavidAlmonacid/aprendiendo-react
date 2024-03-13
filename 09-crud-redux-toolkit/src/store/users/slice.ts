import { createSlice } from "@reduxjs/toolkit";
import type { UserWithId } from "../../types/types.d.ts";

const initialState: UserWithId[] = [
  {
    id: "1",
    name: "David Almonacid",
    email: "david.almonacid@example.com",
    github: "DavidAlmonacid"
  },
  {
    id: "2",
    name: "Albert Rösti",
    email: "albert.roesti@example.com",
    github: "albertroesti"
  },
  {
    id: "3",
    name: "Beat Jans",
    email: "beat.jans@example.com",
    github: "beatjans"
  },
  {
    id: "4",
    name: "Ignazio Cassis",
    email: "ignazio.cassis@example.com",
    github: "ignaziocassis"
  },
  {
    id: "5",
    name: "Karin Keller-Sutter",
    email: "karin.keller-sutter@example.com",
    github: "karinkellersutter"
  },
  {
    id: "6",
    name: "Guy Parmelin",
    email: "guy.parmelin@example.com",
    github: "guyparmelin"
  },
  {
    id: "7",
    name: "Elisabeth Baume-Schneider",
    email: "elisabeth.baume-schneider@example.com",
    github: "elisabethbaumeschneider"
  }
];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {}
});

export default userSlice.reducer;
