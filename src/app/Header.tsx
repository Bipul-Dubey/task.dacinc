"use client";

import Link from "next/link";
import React from "react";

const NAV_LINKS = [
  { url: "/todos", label: "Todos" },
  { url: "/books", label: "Books" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        {/* Left: Logo */}
        <Link href="/" className="inline-flex items-center gap-2">
          <span className="text-lg font-extrabold tracking-tight text-gray-900">
            DashBooks
          </span>
        </Link>

        {/* Right: Nav */}
        <nav aria-label="Primary" className="flex items-center gap-4">
          {NAV_LINKS.map(({ url, label }) => (
            <Link
              key={url}
              href={url}
              className="relative text-md font-medium text-gray-700 transition-colors duration-300 hover:text-gray-900
             after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-900 
             after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
