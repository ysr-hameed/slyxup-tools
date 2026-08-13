import {
  Geist_Mono,
  Poppins,
  Space_Grotesk,
} from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});