"use client";
import { UpcomingUnlockData } from "@/app/utils/data";
import { useCardWidth } from "@/app/utils/hooks/useCardWidth";
import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import UpcomingCard from "../../UpcomingCard";




const UpcomingUnlock = ({gap = 20}) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const cardWidth = useCardWidth(); 
    const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

    const checkScroll = () => {
        const el = scrollRef.current;
        if (!el) return;

        setAtStart(el.scrollLeft === 0);
        setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        checkScroll(); // Run once initially
        el.addEventListener("scroll", checkScroll);
        return () => el.removeEventListener("scroll", checkScroll);
    }, []);

    
    const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -(cardWidth + gap) : cardWidth + gap,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className="flex flex-col w-full gap-[24px]  md:px-[32px]">
        <h1 className="text-white text-[14px]/[20px] tracking-[-0.3%] align-[cap] font-semibold">Upcoming Unloks</h1>
        <div ref={scrollRef} 
        className={`flex items-center gap-[${gap}px] overflow-x-scroll scrollbar-hide`} style={{ scrollSnapType: 'x mandatory' }}>
            {UpcomingUnlockData.map((item, idx)=>(
                <UpcomingCard
                key={idx}
                avatar={item.project.avatar}
                date={item.project.date}
                isToday={item.project.isToday}
                name={item.project.name}
                ticker={item.project.ticker}
                token={item.unlock.token}
                tokenAmount={item.unlock.amount}
                mCapPerc={item.value.percentageOfMarketCap}
                tokenMatketValue={item.value.usdValue}
                cardWidth={cardWidth}
                />
            ))}
        </div>
        <div className="w-full flex justify-between items-center">
            <button 
            disabled={atStart}
            onClick={()=> scroll("left")}
            className="rounded-[50%] w-fit rotate-180 bg-[#151C23] flex justify-center items-center cursor-pointer disabled:cursor-not-allowed">
                <Image src="/right-caret-icon.svg" width={0} height={0} className="w-[32px] h-[32px]"  alt="right icon"/>
            </button>
            <button 
            disabled={atEnd}
            onClick={()=> scroll("right")}
            className="rounded-[50%] w-fit bg-[#151C23] flex justify-center items-center cursor-pointer disabled:cursor-not-allowed">
                <Image src="/right-caret-icon.svg" width={0} height={0} className="w-[32px] h-[32px]"  alt="right icon"/>
            </button>
        </div>
    </div>
  )
}

export default UpcomingUnlock