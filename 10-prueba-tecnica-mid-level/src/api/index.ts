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

  const currentPage = Number(data.info.page);
  const nextPage = currentPage <= 10 ? currentPage + 1 : undefined;

  return { users: data.results, nextPage };
}
