"use client";

import React from "react";
import { IBook } from "@/types";
import { X, Calendar, BookOpen, User } from "lucide-react";
import { getCoverUrl } from "@/libs/utils";
import Image from "next/image";

interface BookModalProps {
  book: IBook | null;
  isOpen: boolean;
  onClose: () => void;
}

export function BookModal({ book, isOpen, onClose }: BookModalProps) {
  if (!isOpen || !book) return null;

  const coverUrl = getCoverUrl(book);

  const firstAuthor =
    Array.isArray(book.author_name) && book.author_name.length > 0
      ? book.author_name[0]
      : undefined;

  const firstYear =
    typeof book.first_publish_year === "number"
      ? book.first_publish_year
      : undefined;

  const editions =
    typeof book.edition_count === "number" ? book.edition_count : undefined;

  const languages = Array.isArray((book as IBook).language)
    ? ((book as IBook).language as string[])
    : [];

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel (white theme) */}
      <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white text-gray-900 shadow-2xl ring-1 ring-gray-200">
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800 transition"
        >
          <X className="h-5 w-5" />
        </button>

        <div
          className="grid gap-6 px-6 py-6 md:gap-8 md:px-8"
          style={{
            gridTemplateColumns: "1fr",
          }}
        >
          <div className="contents md:grid md:grid-cols-[minmax(200px,240px)_1fr] md:items-start md:gap-8">
            {/* Left: Cover */}
            <div className="mx-auto md:mx-0 md:sticky md:top-8">
              <div className="relative aspect-[2/3] w-[220px] md:w-[240px] overflow-hidden rounded-xl bg-gray-100 ring-1 ring-gray-200">
                {coverUrl ? (
                  <Image
                    height={360}
                    width={220}
                    src={coverUrl}
                    loader={() => coverUrl}
                    alt={book.title}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display =
                        "none";
                    }}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-gray-400">
                    No cover
                  </div>
                )}
              </div>
            </div>

            {/* Right: Content */}
            <div className="mt-4 md:mt-0 space-y-6">
              <div className="">
                <h2
                  id="book-modal-title"
                  className="text-2xl font-bold leading-snug text-blue-700"
                >
                  {book.title}
                </h2>
                <p className="mt-1 flex items-center gap-2 text-sm text-gray-600">
                  <User className="h-4 w-4 text-gray-400" />
                  {firstAuthor ? `by ${firstAuthor}` : "Unknown author"}
                </p>
              </div>
              {/* Meta rows */}
              <div className="grid gap-3 text-sm">
                {firstYear !== undefined && (
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-700">
                      First published:{" "}
                      <span className="font-medium text-gray-900">
                        {firstYear}
                      </span>
                    </span>
                  </div>
                )}

                {editions !== undefined && (
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-700">
                      {editions} {editions === 1 ? "edition" : "editions"}
                    </span>
                  </div>
                )}
              </div>

              {/* Languages */}
              {languages.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-gray-900">
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {languages.slice(0, 8).map((lang, i) => (
                      <span
                        key={`${lang}-${i}`}
                        className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase text-cyan-700 ring-1 ring-cyan-200"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
