"use client";

import { getCoverUrl } from "@/libs/utils";
import { IBook } from "@/types";
import { Calendar, User, BookOpen } from "lucide-react";
import Image from "next/image";

interface BookCardProps {
  book: IBook;
  onClick: (book: IBook) => void;
}

export function BookCard({ book, onClick }: BookCardProps) {
  const coverUrl = getCoverUrl(book);

  return (
    <div
      onClick={() => onClick(book)}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-blue-300"
    >
      <div className="flex gap-4">
        {coverUrl ? (
          <div className="flex-shrink-0">
            <Image
              height={160}
              width={120}
              loader={() => coverUrl}
              src={coverUrl}
              alt={book.title}
              className="w-16 h-24 object-cover rounded"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="flex h-24 w-16 items-center justify-center bg-gray-100 ring-1 ring-gray-200 rounded text-center text-gray-400">
            No cover
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {book.title}
          </h3>

          {book.author_name && (
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <User className="h-4 w-4" />
              <span className="line-clamp-1">
                {book.author_name.slice(0, 2).join(", ")}
              </span>
            </div>
          )}

          {book.first_publish_year && (
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <Calendar className="h-4 w-4" />
              <span>{book.first_publish_year}</span>
            </div>
          )}

          {book.edition_count && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <BookOpen className="h-4 w-4" />
              <span>{book.edition_count} editions</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
