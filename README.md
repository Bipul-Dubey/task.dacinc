This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# DACINC Task Project

This project is a Next.js application implementing two main features:

## 1. Todos Analytics Dashboard

- Fetches todos from `https://jsonplaceholder.typicode.com/todos`.
- Displays a Pie Chart (completed vs pending todos).
- Displays a Bar Chart (number of todos per user).
- Uses [Recharts](https://recharts.org/) for charting.
- Uses [TanStack React Query](https://tanstack.com/query/latest) for API data fetching and state management.
- Responsive layout and error handling.

## 2. Book Search App

- Searches books using `https://openlibrary.org/search.json?q=harry+potter`.
- Search input with debounce for efficient API calls.
- Displays results with title, author, and year.
- Pagination (Next/Prev buttons).
- Clicking a book opens a modal with details.
- Uses React Query for API integration and state management.
- Responsive UI/UX, error handling, and reusable components.

## Technologies Used

- Next.js (App Router)
- TypeScript
- React Query (TanStack Query)
- Recharts
- Responsive CSS

## Structure

```
src/
  app/
	 todos/        # Analytics Dashboard page
	 books/      # Book Search App page
	 providers.tsx     # React Query provider setup
	 layout.tsx        # App layout
	 globals.css       # Global styles
  components/
	 books/            # Book-related reusable components
	 charts/           # Chart-related reusable components
```

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Visit:
   - `/todos` for the Analytics Dashboard
   - `/books` for the Book Search App

## Code Quality

- State management via React Query
- Error handling for all API calls
- Reusable and documented components
- Responsive design for all pages
