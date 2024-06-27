import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/users";

export function useUsers() {
  const { data, isLoading, isError, hasNextPage, refetch, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["users"],
      queryFn: ({ pageParam }) => fetchUsers({ page: pageParam }),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => lastPage.nextPage
    });

  return { data, isLoading, isError, hasNextPage, refetch, fetchNextPage };
}
