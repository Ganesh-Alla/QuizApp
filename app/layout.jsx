import React from "react";
import "./globals.css";
import NavBar from "@/components/Navbar";

export const metadata = {
  title: "Code Combat",
  description: "Developed by ISTE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<body className="min-h-screen flex flex-col">
    <header className="h-16">
      <NavBar/>
    </header>
    <main className="flex-grow flex">
      {children}
      </main>
</body>
    </html>
  );
}
