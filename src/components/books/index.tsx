"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { IBook, BookSearchResponse } from "@/types";
import { searchBooks } from "@/apis";
import { BookSearchForm } from "./BookSearchForm";
import Loader from "../common/Loader";
import { BookModal } from "./BookModal";
import { Pagination } from "./Pagination";
import { BookCard } from "./BookCard";

const BOOKS_PER_PAGE = 20;

export default function BooksPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBook, setSelectedBook] = useState<IBook | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, error } = useQuery<BookSearchResponse>({
    queryKey: ["books", searchQuery, currentPage],
    queryFn: () => searchBooks(searchQuery, currentPage),
    enabled: searchQuery.trim().length > 0,
  });

  const docs = data?.docs ?? [];
  const numFound = data?.numFound ?? 0;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleBookClick = (book: IBook) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // const totalPages = Math.max(1, Math.ceil(numFound / BOOKS_PER_PAGE));

  return (
    <div className="container mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Book Search</h1>
        <p className="text-gray-600">
          Search through millions of books from Open Library
        </p>
      </div>

      <BookSearchForm onSearch={handleSearch} />

      {!searchQuery?.trim() && docs.length === 0 && !isLoading ? (
        <div className="text-center py-12">
          <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Start your book search
          </h3>
          <p className="text-gray-500">
            Enter a book title, author, or subject to find books
          </p>
        </div>
      ) : null}

      {isLoading && <Loader />}

      {error && (
        <div className="text-center py-8">
          <p className="text-red-600 mb-4">
            Error searching books. Please try again.
          </p>
        </div>
      )}

      {!isLoading && !error && docs.length === 0 && searchQuery?.trim() && (
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">
            No books found for :{searchQuery}
          </p>
          <p className="text-sm text-gray-500">
            Try different keywords or check your spelling
          </p>
        </div>
      )}

      {docs.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {docs.slice(0, BOOKS_PER_PAGE).map((book) => (
              <BookCard key={book.key} book={book} onClick={handleBookClick} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalResults={numFound}
            resultsPerPage={BOOKS_PER_PAGE}
            onPageChange={handlePageChange}
          />
        </>
      )}

      <BookModal
        book={selectedBook}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
