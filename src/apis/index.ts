import { BookSearchResponse, TTodo } from "@/types";
const BOOKS_PER_PAGE = 20;
export const fetchTodos = async (): Promise<TTodo[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) throw new Error("Failed to fetch todos");
  return res.json();
};

export async function searchBooks(
  q: string,
  page: number
): Promise<BookSearchResponse> {
  if (!q?.trim()) {
    return { docs: [], numFound: 0, start: 0 };
  }
  const offset = page * BOOKS_PER_PAGE;
  const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(
    q
  )}&page=${page}&offset=${offset}&limit=${BOOKS_PER_PAGE}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Search failed: ${res.status}`);
  return res.json();
}

export async function fetchWorkDetails(workKey: string) {
  const key = workKey.startsWith("/works/") ? workKey : `/works/${workKey}`;
  const res = await fetch(`https://openlibrary.org${key}.json`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Work details failed: ${res.status}`);
  return res.json();
}
