import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const LandingHero = () => {
  return (
    <div className="w-full h-auto text-center px-[16px]">
        <div className="xl:w-[711px] mx-auto">
            <span
            className="text-[12px]/[18px] font-semibold align-[cap] 
            text-[#1E80FF] bg-[#90F4CE1A] text-[#14C784] tracking-[-0.25%] rounded-[22px] p-[10px]">
                PRIVATE BETA
            </span>
            <h1 className="font-semibold xl:bold text-[26px] leading-[37px] xl:text-[45px] xl:leading-[61px] xl:tracking-[-0.7%] text-white mt-[32px] mb-[40px]">
                The leading DAO ecosystem intelligence platform
            </h1>
            <p className="text-[14px]/[20px] font-normal text-[#84919F] mb-[32px]">
                Decentralytics offers a comprehensive analysis of the DAO ecosystem, 
                providing insights into financial performance, 
                community engagement, governance dynamics, and key events
            </p>
            <Button asChild className="w-fit h-[42px] rounded-[8px] bg-[#1E80FF] text-white text-[14px]/[20px] font-semibold align-[cap] tracking-[-0.3%] text-white">
            <Link href="/auth/dashboard">
                Join early access
            </Link>
            </Button>
        </div>
       <div className="mt-8 max-w-[1156px] mx-auto">
            <Image 
            src="/hero-section-1.webp"
            alt="Decentralytics Hero Dashboard"
            width={1156}
            height={682}
            priority
            sizes="(max-width: 768px) 343px, (max-width: 1200px) 100vw, 1156px"
            className="w-full h-auto min-w-[343px] min-h-[202px] object-cover rounded-lg"
            />  
       </div>
    </div>
  )
}

export default LandingHero;