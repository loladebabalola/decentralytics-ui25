import Image from "next/image"
import Link from "next/link"
import MainLogo from "../../public/Combined-logo.svg";
import { MobileMenu } from "./MobileMenu";
import { navItems } from "../utils/data";



const LandingHeader = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 w-full
     bg-[#060D13] border-b border-[#222B35] px-[16px] 
     flex items-center h-[80px] mb-24">
        <div className="w-full flex justify-between items-center gap-2 sm:gap-0">
            <div className="flex justify-between items-center space-x-5 min-w-[70%] sm:min-w-[20%] overflow-x-scroll scrollbar-hide">
                <Link href="/">
                    <Image src={MainLogo} alt="logo" width={0} height={0} priority className="w-[144.6px] h-[20px]"/>
                </Link>
            </div>
            <div className="hidden sm:block flex justify-between items-center space-x-5 min-w-[70%] sm:min-w-[40%] overflow-x-scroll scrollbar-hide">
                {navItems.map((nav, idx) => (
                    <Link href={nav.href} key={idx} className="text-[14px]/[20px] font-semibold align-[cap] text-[#70808F]">
                        {nav.name}
                    </Link>
                ))}
            </div>
            <div className="hidden sm:block">
                <button className="bg-[#1E80FF] text-white px-[12px] py-[9px] rounded-[10px] text-[12px]/[18px] font-medium align-[cap] tracking-[-0.25%]">
                    Connect
                </button>
            </div>
            <div className="block sm:hidden">
             <MobileMenu />
            </div>
        </div>
    </nav>
  )
};


export default LandingHeader