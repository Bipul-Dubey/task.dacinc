"use client";

import { useState } from "react";
import { Search } from "lucide-react";

interface BookSearchFormProps {
  onSearch: (query: string) => void;
  initialQuery?: string;
}

export function BookSearchForm({
  onSearch,
  initialQuery = "",
}: BookSearchFormProps) {
  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          value={initialQuery}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search for books (e.g., Harry Potter, JavaScript, History)..."
          className="w-full px-4 py-3 pr-12 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-blue-600 transition-colors">
          <Search className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
