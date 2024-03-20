import { addNewUser, deleteUserById } from "../store/users/slice.ts";
import type { User, UserId } from "../types/types.d.ts";
import { useAppDispatch } from "./store";

export function useUserActions() {
  const dispatch = useAppDispatch();

  const addUser = ({ name, email, role }: User) => {
    dispatch(addNewUser({ name, email, role }));
  };

  const deleteUser = (id: UserId) => {
    dispatch(deleteUserById(id));
  };

  return { addUser, deleteUser };
}
