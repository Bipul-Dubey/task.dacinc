import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCoverUrl = (book: { cover_i?: number }) => {
  if (!book.cover_i) return null;
  return `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
};
