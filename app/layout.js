import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_comonents/Navbar";
import Footer from "./_comonents/Footer";
import ProductsContext from "@/Context/Products";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ProductsContext>
      <ClerkProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          <Navbar />
          {children}
          <Footer />
        </body>
        </ClerkProvider>
      </ProductsContext>
    </html>
  );
}
