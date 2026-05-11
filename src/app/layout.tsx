import "./globals.css";
import { Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Akshat Jewelry",
  description: "Luxury Jewelry Collection",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={playfair.variable}>
        {children}
      </body>
    </html>
  );
}