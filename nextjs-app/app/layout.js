import { Oswald, Inter } from "next/font/google";
import "./globals.css";

// Configure fonts
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Payana Trails",
  description: "Website Under Construction",
};

export default function RootLayout({ children }) {
  return (
    // Add suppressHydrationWarning here
    <html lang="en" suppressHydrationWarning>
      <body className={`${oswald.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
