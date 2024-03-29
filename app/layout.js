import { Inter } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {ThemeProvider} from '@/components/theme-provider'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ankush Portfolio",
  description: "Ankush Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider attribute="class"
            defaultTheme="light">
      <Header />
      {children}
      <Footer />
      </ThemeProvider>
      </body>
    </html>
  );
}
