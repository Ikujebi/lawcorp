import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatButton from "./components/ChatButton";
import LegalDisclaimerModal from "./components/LegalDisclaimerModal";
import "./globals.css";
import { Montserrat   } from "./fonts";



export const metadata: Metadata = {
  title: "Lummina",
  description: "ATTORNEYS AT LAW",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Montserrat .variable} antialiased flex flex-col min-h-screen`}
      >
        <LegalDisclaimerModal />
         <Header />
        <main className="flex-grow">{children}</main>
        <ChatButton />
        <Footer />
      </body>
    </html>
  );
}
