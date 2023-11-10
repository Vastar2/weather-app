import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../src/styles/globals.css";
import Favicon from "../public/favicon.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Utopia weather",
  description: "Regular weather app",
  icons: [{ rel: "icon", url: Favicon.src }],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};
export default RootLayout;
