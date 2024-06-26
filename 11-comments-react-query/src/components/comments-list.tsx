import type { Comment } from "../service/comments";

export function CommentsList({ data }: { data?: Comment[] }) {
  return (
    <ul>
      <li>
        {data?.map((comment) => (
          <article
            key={comment.id}
            className={`
            ${comment.preview ? "bg-stone-300 opacity-80" : "bg-white"} block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100`}
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {comment.title}
            </h5>
            <p className="font-normal text-gray-700">{comment.message}</p>
          </article>
        ))}
      </li>
    </ul>
  );
}
