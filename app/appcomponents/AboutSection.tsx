"use client";
import Image from "next/image";
import aboutImageOne from "@/public/multi-chain-image.webp";
import aboutImageTwo from "@/public/overall-dao-bg.webp";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { LandingScrollCardContainer } from "./LandingScrollCardContainer";

const AboutSection = () =>{ 
    const [activeIndex, setActiveIndex] = useState(0);
    const options = {
        threshold: 0.6,
        triggerOnce: false,
    }

    const [ref1, inView1] = useInView(options)
    const [ref2, inView2] = useInView(options)
    
    useEffect(() => {
    if (inView1) setActiveIndex(0)
    else if (inView2) setActiveIndex(1)
    }, [inView1, inView2])
    
    return(
        <div className="w-full h-auto flex flex-col gap-[20px] mt-[62px] px-[16px]">
            <div className="w-full h-auto xl:h-[476px] flex items-stretch overflow-x-scroll scrollbar-hide gap-[20px]">
                <LandingScrollCardContainer 
                ref={ref1}
                pdx="0px" 
                pdy="0px" 
                direction="vertical" 
                otherClasses="py-[48px] bg-gradient-to-b from-[#11171D] to-[#060D13] 
                w-full h-auto lg:w-[48%] xl:w-1/2"
                >
                    <div className="flex flex-col gap-[20px] px-[32px]">
                        <h1 className="font-bold text-[26px] leading-[37px] tracking-[-0.7%] text-white">
                            A multi chain intelligence tool
                        </h1>
                        <p className="font-medium text-[16px] leading-[24px] align-[cap] trackig-[-0.5%] text-[#84919F]">
                            Explore DAOs across multiple blockchains providing the richest and 
                            most up to date DAO data across each chain.
                        </p>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="relative w-full min-w-[343px] max-w-[566px]">
                            <Image 
                                src={aboutImageOne}
                                alt="Multi-chain DAO analytics dashboard visualization"
                                width={566}
                                height={289}
                                priority
                                sizes="(max-width: 768px) 343px, 566px"
                                className="w-full h-auto object-cover"
                                style={{
                                    minHeight: '182px',
                                    maxHeight: '289px'
                                }}
                            />
                        </div>
                    </div>
                </LandingScrollCardContainer>

                <LandingScrollCardContainer 
                ref={ref2}
                pdx="0px" 
                pdy="0px" 
                direction="vertical" 
                otherClasses="pt-[48px] pl-[32px] bg-gradient-to-b from-[#11171D] to-[#060D13]
                w-full lg:w-[48%] xl:w-1/2"
                >
                    <div className="flex flex-col gap-[20px] ">
                        <h1 className="font-bold text-[26px] leading-[37px] tracking-[-0.7%] text-white">
                            Overall DAO ecosystem
                        </h1>
                        <p className="font-medium text-[16px] leading-[24px] align-[cap] trackig-[-0.5%] text-[#84919F]">
                        Dive deep into the DAO ecosystem. Explore Treasury, Governance,
                        and Member data with our detailed analytics and customizable filters.
                        </p>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="relative w-full min-w-[311px] max-w-[566px]">
                            <Image 
                                src={aboutImageTwo}
                                alt="DAO ecosystem dashboard visualization"
                                width={566}
                                height={289}
                                priority
                                sizes="(max-width: 768px) 311px, 534px"
                                className="w-full h-auto object-cover"
                                style={{
                                    minHeight: '245.01px',
                                    maxHeight: '534px'
                                }}
                            />
                        </div>
                    </div>
                </LandingScrollCardContainer>
            </div>
            <div className="w-full flex items-center justify-center gap-[10px] p-[6px] sm:hidden mt-[14px]">
                <span className="flex items-center gap-[10px] p-[6px] bg-[#11171D] rounded-[12px]">
                    {[0,1].map((_,idx) => (
                        <div key={idx} className={`w-[10px] h-[10px] rounded-[50%] bg-[#19212A] ${activeIndex === idx ? "bg-[#84919F]" : "bg-[#19212A]"}`}/>
                    ))}
                </span>
            </div>
        </div>
       
    )
}

export default AboutSection;