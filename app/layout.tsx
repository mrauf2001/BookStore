import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./components/context/CartContext";
import { PageLoader } from "./components/loading/PageLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whimsical What's It Press",
  description: "Books are great",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <PageLoader />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
