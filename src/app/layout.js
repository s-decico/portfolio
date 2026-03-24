import { Inter } from "next/font/google";
import "./globals.scss";
import { META_TAGS } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: META_TAGS.TITLE,
  description: META_TAGS.DESCRIPTION,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
