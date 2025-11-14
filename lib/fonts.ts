// lib/fonts.ts
import { Poppins } from "next/font/google";

export const fontSans = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
