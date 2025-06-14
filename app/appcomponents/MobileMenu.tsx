import { Sheet, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SheetContent, SheetClose, SheetFooter } from "@/components/ui/sheet";
import Image from "next/image";
import hamburgerIcon from "@/public/hamburgerIcon.svg";
import closeIcon from "@/public/cancel-token.svg";
import navIcon from "@/public/Combined-logo.svg";
import { navItems } from "../utils/data";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";

export function MobileMenu() {
    return (
      <div className="md:hidden">
        <Sheet>
          {/* Trigger Button (Hamburger Icon) */}
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="p-0">
             <Image 
              src={hamburgerIcon} 
              alt="Menu"
              width={24} 
              height={24}
              className="w-auto h-auto"
              />
            </Button>
          </SheetTrigger>
  
          {/* Slide-in Side Panel */}
          <SheetContent side="right" className="w-full bg-[#060D13] border-none">

        
            {/* Top Bar with Close Button */}
            <div className="flex items-center justify-between mb-6 px-[16px] py-[22px]" >
              <VisuallyHidden asChild>  
                <SheetTitle>
                 Menu
                </SheetTitle>
               
              </VisuallyHidden>
              <VisuallyHidden asChild>
                <SheetDescription>
                 Menu
                </SheetDescription>
              </VisuallyHidden>
              <Image 
                src={navIcon} 
                alt="Menu" 
                width={144.62} 
                height={20.01} 
                className="w-auto h-auto"
              />
              <SheetClose asChild>
                <Button variant="ghost" size="icon" className="p-0">
                  <Image 
                  src={closeIcon} 
                  alt="Close" 
                  width={24} 
                  height={24} 
                  />
                </Button>
              </SheetClose>
            </div>
  
            {/* Nav Links */}
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href} className="border-b border-[#11171D] pt-[28px] pl-[16px] pb-[26px]" >
                  <Link href={item.href} className="text-sm font-medium text-white">
                    {item.name}
                  </Link>
                </SheetClose>
                ))}
            </nav>
            <SheetFooter className="mb-10">
              <Button 
              type="button" 
              className="w-full w-[95%] rounded-[8px] h-[42px] mx-auto bg-[#1E80FF] text-white text-[14px]/[20px] font-semibold align-[cap]">
                Contact
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    );
  }
  
