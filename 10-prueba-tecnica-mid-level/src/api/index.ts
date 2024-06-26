import type { FetchUsersResponse } from "../types";

export async function fetchUsers({
  page
}: {
  page: number;
}): Promise<FetchUsersResponse> {
  const response = await fetch(
    `https://randomuser.me/api/?results=10&seed=foobar2&page=${page}`
  );

  if (!response.ok) {
    throw new Error("Error en la petición");
  }

  const data = await response.json();

  return { users: data.results, nextPage: data.info.page + 1 };
}
