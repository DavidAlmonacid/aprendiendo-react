export interface User {
  name: string;
  email: string;
  github: string;
}

export type UserId = string;

export interface UserWithId extends User {
  id: UserId;
}
