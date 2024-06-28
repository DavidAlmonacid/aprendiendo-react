import { API_KEY, BASE_URL, BIN_ID } from "../config";

export interface Comment {
  title: string;
  message: string;
  preview?: boolean;
}

export interface CommentWithId extends Comment {
  id: string;
}

export const getComments = async () => {
  const response = await fetch(`${BASE_URL}/b/${BIN_ID}?meta=false `, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": API_KEY
    }
  });

  if (!response.ok) {
    throw new Error("Failed to fetch comments.");
  }

  return await response.json();
};

// const delay = async (ms: number) =>
//   await new Promise((resolve) => setTimeout(resolve, ms));

export const postComment = async (comment: Comment) => {
  const comments = await getComments();

  const id = crypto.randomUUID();
  const newComment = { ...comment, id };
  const commentsToSave = [...comments, newComment];

  const response = await fetch(
    "https://api.jsonbin.io/v3/b/643fbe2bc0e7653a05a77535",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Key": import.meta.env.VITE_PUBLIC_API_KEY
      },
      body: JSON.stringify(commentsToSave)
    }
  );

  if (!response.ok) {
    throw new Error("Failed to post comment.");
  }

  return newComment;
};