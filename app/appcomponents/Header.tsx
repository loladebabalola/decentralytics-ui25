"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/app/utils/data";
import SearchCapsuleContainer from "./SearchCapsuleContainer";


const Header = () => {
    const pathname = usePathname(); 


  return (
   <nav className="w-full bg-[#060D13] px-3 border border-[rgb(34,43,53)] relative">
        <div className="w-full h-[56px] flex justify-between items-center gap-2 sm:gap-0">
            <div
            id="nav-holder"
            className="flex justify-between items-center space-x-5 min-w-[70%] sm:min-w-[40%] overflow-x-scroll scrollbar-hide">
               {navItems.map((link, idx) =>{
                const isActive = pathname === link.href;
                return(
                    <Link
                     key={idx} 
                     href={link.href} 
                     className={`text-[7px]/[20px] md:text-[14px]/[20px] font-semibold scrollbar-hide  ${isActive ? `text-white` : `text-[#70808F]`}`}
                    >
                     {link.name}
                    </Link>
                )
               })}
            </div>

            <div id="app-logo" className="hidden sm:block">
                <Link 
                href="/auth/dashboard">
                    <Image 
                    src="/app-logo.svg" 
                    width={0}
                    height={0} 
                    className="cursor-pointer w-[20px] h-[20px]"
                    priority 
                    alt="main-logo"
                    />
                </Link>
            </div>

            <div id="search-filter" className="h-full flex justify-center items-center">
                <SearchCapsuleContainer/>   
            </div>
        </div>
   </nav>
  )
}

export default Header;

// export const navItems = [
//     { name: 'Home', href: '/' },
//     { name: 'Dashboard', href: '/auth/dashboard' },
//     { name: 'Finance', href: '/auth/finance' },
//     { name: 'Governance', href: '/auth/governance' },
//     { name: 'Resources', href: '/auth/resources' },
// ];
