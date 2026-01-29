// src/app/fonts.ts
import localFont from "next/font/local";

export const lawFont = localFont({
  src: "../public/fonts/law-font-regular.woff2",
  variable: "--font-law",
  display: "swap",
});

export const SourceCodePro = localFont({
  src: "../public/fonts/LibreBaskerville-Italic-VariableFont_wght.ttf",
  variable: "--font-source-code-pro",
  display: "swap",
});
export const Nunito = localFont({
  src: "../public/fonts/Nunito-VariableFont_wght.ttf",
  variable: "--font-Nunito-VariableFont",
  display: "swap",
});
