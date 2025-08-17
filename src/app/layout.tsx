import ReactQueryClientProvider from "@/components/providers";
import "./globals.css";
import Header from "./Header";
import { GradientContainer } from "@/components/common/Background";

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
    <html lang="en" className="dark">
      <body>
        <ReactQueryClientProvider>
          <Header />
          <main>
            <GradientContainer>{children}</GradientContainer>
          </main>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
