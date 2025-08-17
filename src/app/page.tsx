"use client";

import Link from "next/link";

const HomePage = () => {
  return (
    <main className="relative overflow-hidden">
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center md:py-28">
        {/* Badge/eyebrow */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          <span>Next.js App Router + TypeScript</span>
          <span className="h-1 w-1 rounded-full bg-blue-400" />
          <span>Tailwind CSS</span>
          <span className="h-1 w-1 rounded-full bg-blue-400" />
          <span>TanStack Query + Recharts</span>
        </div>

        {/* Title */}
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Insights and Discovery in one place
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
          Visualize todos with interactive charts and explore millions of books
          with a fast, debounced search. Built with modern React patterns for
          performance and clarity.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/analytics"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            View Todos Dashboard
          </Link>
          <Link
            href="/books"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Search Books
          </Link>
        </div>

        {/* Small helper text */}
        <p className="mt-4 text-xs text-gray-500">
          Uses JSONPlaceholder Todos and Open Library Search APIs
        </p>
      </section>
    </main>
  );
};

export default HomePage;
