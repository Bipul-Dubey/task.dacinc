import ReactQueryClientProvider from "@/components/providers";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Dashboard + Books",
  description: "Analytics and Book Search",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body>
          <header style={{ padding: 16, borderBottom: "1px solid #eee" }}>
            <nav style={{ display: "flex", gap: 16 }}>
              <Link href="/todos">Todos</Link>
              <Link href="/books">Books</Link>
            </nav>
          </header>
          <main style={{ padding: 16 }}>{children}</main>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
