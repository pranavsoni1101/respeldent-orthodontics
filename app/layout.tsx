import type { Metadata } from "next";
import { fontSans } from "@/lib/fonts";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "Resplendent Orthodontics",
  description: "Smiles that shine out – Orthodontic & Dental Care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} font-sans antialiased`}
      >
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
