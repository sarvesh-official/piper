import type { Metadata } from "next";
import "./globals.css";
import { Fira_Code } from "next/font/google";


export const fira = Fira_Code({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fira.className}`}>
        {children}
      </body>
    </html>
  );
}
