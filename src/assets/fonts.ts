import { Oswald, Source_Code_Pro, Monoton } from "next/font/google";

export const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});

export const source_code_pro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-code-pro",
});

export const monoton = Monoton({
  subsets: ["latin"],
  display: "swap",
  weight: '400'
});
