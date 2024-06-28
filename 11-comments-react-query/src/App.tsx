import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { FormInput, FormTextArea } from "./components/comment-form-fields";
import { CommentsList } from "./components/comments-list";
import { getComments, postComment, type Comment } from "./service/comments";

export default function App() {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["comments"],
    queryFn: getComments
  });

  const { mutate, isPending } = useMutation({
    mutationFn: postComment,
    onMutate: async (newComment) => {
      // Optimistically update the cache
      await queryClient.cancelQueries({ queryKey: ["comments"] });

      const optimisticComment = { ...newComment, preview: true };

      queryClient.setQueryData(["comments"], (oldData?: Comment[]) => {
        if (!oldData) {
          return [optimisticComment];
        }

        return [...oldData, optimisticComment];
      });

      return { optimisticComment, previousComments: data };
    },
    onSuccess: (newComment, _, context) => {
      // Update the cache with the final data
      queryClient.setQueryData(["comments"], (oldData: Comment[]) => {
        return oldData.map((comment) => {
          return comment.preview && comment.id === context.optimisticComment.id
            ? newComment
            : comment;
        });
      });
    },
    onError: (error, _, context) => {
      // Rollback the cache update
      console.error(error);

      if (context?.previousComments) {
        queryClient.setQueryData(["comments"], context.previousComments);
      }
    }
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isPending) {
      return;
    }

    const formData = new FormData(event.currentTarget);
    const title = formData.get("title")?.toString();
    const message = formData.get("message")?.toString();
    const id = crypto.randomUUID();

    if (!title || !message) {
      return;
    }

    mutate({ id, title, message });
  };

  return (
    <main className="grid h-screen grid-cols-2 overflow-hidden">
      <div className="col-span-1 p-8 bg-white overflow-y-auto">
        {isLoading && <strong>Cargando...</strong>}
        {error != null && <strong>Algo salió mal</strong>}
        <CommentsList data={data} />
      </div>

      <div className="col-span-1 p-8 bg-black">
        <form
          className={`${isPending ? "opacity-60" : ""} block max-w-xl px-4 m-auto`}
          onSubmit={handleSubmit}
        >
          <FormInput />
          <FormTextArea />

          <button
            disabled={isPending}
            type="submit"
            className="mt-4 px-12 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm py-2.5 text-center mr-2 mb-2 disabled:pointer-events-none"
          >
            {isPending ? "Enviando comentario..." : "Enviar comentario"}
          </button>
        </form>
      </div>
    </main>
  );
}
