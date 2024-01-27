import {
  Plus_Jakarta_Sans,
  Poppins,
  Inter,
  Montserrat,
} from "next/font/google";

export const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--plus-font",
});

export const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--mons-font",
});
