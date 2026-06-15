import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatButton from "./components/ChatButton";
import ActivityTracker from "./components/ActivityTracker";
import "./globals.css";
import { Montserrat } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://www.lumminalaw.com"
  ),

  title: {
    default:
      "LUMMINA LAW FIRM | LEGAL MANAGEMENT & COMPLIANCE",
    template: "%s | Lummina Law",
  },

  description:
    "Modern legal management, compliance, and advisory services for businesses and institutions.",

  applicationName: "Lummina Law",

  keywords: [
    "Legal Management",
    "Compliance",
    "Corporate Law",
    "Legal Advisory",
    "Contract Management",
    "Governance",
    "Law Firm",
    "Nigeria Law Firm",
  ],

  creator: "Lummina Law",
  publisher: "Lummina Law",

  openGraph: {
    title: "Lummina Law",
    description:
      "Modern legal management and compliance services for businesses and institutions.",
    url: "https://www.lumminalaw.com",
    siteName: "Lummina Law",
    locale: "en_US",
    type: "website",
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Montserrat.className} antialiased flex flex-col min-h-screen`}
      >
        <ActivityTracker />

        {/* <LegalDisclaimerModal /> */}

        <Header />

        <main className="flex-grow">
          {children}
        </main>

        <ChatButton />

        <Footer />
      </body>
    </html>
  );
}