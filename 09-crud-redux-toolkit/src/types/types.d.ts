export interface User {
  name: string;
  email: string;
  role: string;
}

export type UserId = string;

export interface UserWithId extends User {
  id: UserId;
}
