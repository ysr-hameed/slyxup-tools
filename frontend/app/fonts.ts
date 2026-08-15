import {
  DM_Sans,
  JetBrains_Mono,
  Lora,
  Outfit,
} from "next/font/google";

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const lora = Lora({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});