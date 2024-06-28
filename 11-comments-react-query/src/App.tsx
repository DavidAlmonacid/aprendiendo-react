import { useQuery } from "@tanstack/react-query";

import { FormInput, FormTextArea } from "./components/comment-form-fields";
import { CommentsList } from "./components/comments-list";

import { getComments, type CommentWithId } from "./service/comments";

export default function App() {
  const { data, isLoading, error } = useQuery<CommentWithId[]>({
    queryKey: ["comments"],
    queryFn: getComments
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const title = formData.get("title")?.toString();
    const message = formData.get("message")?.toString();

    if (!title || !message) {
      return;
    }
  };

  return (
    <main className="grid h-screen grid-cols-2">
      <div className="col-span-1 p-8 bg-white">
        {isLoading && <strong>Cargando...</strong>}
        {error != null && <strong>Algo salió mal</strong>}
        <CommentsList data={data} />
      </div>

      <div className="col-span-1 p-8 bg-black">
        <form
          // className={`${isLoadingMutation ? "opacity-40" : ""} block max-w-xl px-4 m-auto`}
          onSubmit={handleSubmit}
        >
          <FormInput />
          <FormTextArea />

          <button
            // disabled={isLoadingMutation}
            type="submit"
            className="mt-4 px-12 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm py-2.5 text-center mr-2 mb-2"
          >
            {/* {isLoadingMutation ? "Enviando comentario..." : "Enviar comentario"} */}
            Enviar comentario
          </button>
        </form>
      </div>
    </main>
  );
}
