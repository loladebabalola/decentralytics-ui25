import Footer from "../appcomponents/Footer";
import Header from "../appcomponents/Header";
import Marquee from "../appcomponents/Marquee";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
     className="min-h-screen bg-[#060D13] w-full overflow-x-hidden relative   max-w-[1440px] mx-auto">
      <Marquee/>
      <Header/>
      {children}  
      <Footer />
    </div>
  );
}
