import type { Metadata } from "next";
import "./globals.css";
import { plusJakarta } from "./utils/font";
import Footer from "./appcomponents/Footer";
import { QueryProvider } from "@/lib/providers/query-provider";


export const metadata: Metadata = {
  title: "Decentralytics",
  description: "Your go-to DAO aggregator tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-[#060D13] ${plusJakarta.variable} w-full overflow-x-hidden`}>
      <body className={`${plusJakarta.variable} bg-[#060D13]`}
      >
      <QueryProvider>
        <div
        className="min-h-screen bg-[#060D13] w-full overflow-x-hidden relative   max-w-[1440px] mx-auto">
        {children}  
        <Footer />
        </div>
     </QueryProvider>
      </body>
    </html>
  );
}
