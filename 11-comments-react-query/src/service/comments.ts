import { API_KEY, BASE_URL, BIN_ID } from "../config";

export interface Comment {
  id: `${string}-${string}-${string}-${string}-${string}`;
  title: string;
  message: string;
  preview?: boolean;
}

export async function getComments(): Promise<Comment[]> {
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
}

export async function postComment(newComment: Comment): Promise<Comment> {
  const comments = await getComments();

  const response = await fetch(`${BASE_URL}/b/${BIN_ID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": API_KEY
    },
    body: JSON.stringify([...comments, newComment])
  });

  if (!response.ok) {
    throw new Error("Failed to post comment.");
  }

  return newComment;
}
