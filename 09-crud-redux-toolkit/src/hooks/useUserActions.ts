import { deleteUserById } from "../store/users/slice.ts";
import type { UserId } from "../types/types.d.ts";
import { useAppDispatch } from "./store";

export function useUserActions() {
  const dispatch = useAppDispatch();

  const deleteUser = (id: UserId) => {
    dispatch(deleteUserById(id));
  };

  return { deleteUser };
}
