import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/custom_components/NavigationBar";
import Footer from "@/custom_components/Footer";
import NextAuthProvider from "@/lib/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PetService.Co",
  description: "Pet services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextAuthProvider>
          <NavigationBar/>
          {children}
          <Footer/>
      </NextAuthProvider>
      </body>
    </html>
  );
}
