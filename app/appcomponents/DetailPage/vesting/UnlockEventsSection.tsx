"use client";
import { VestingEventsData } from "@/app/utils/data";
import Image from "next/image";
import ComponentContainer from "../../ComponentContainer";
import LeftEventArrow from "../../LeftEventArrow";
import LineItem from "../../LineItem";
import { useTabSync } from "@/app/utils/hooks/useTabSync";

type VestingEvent = {
    id: string;
    title: string;
    vestingType: string;
    priceImpact: string;
    unlockPercentage: number;
    tokenSymbol: string;
    tokenAmount: string
};

type VestingEventGroup = {
  id: string;
  date: string;
  daysRemaining: string;
  events: VestingEvent[];
};

const UnlockEventsSection = () => {
    const { activeTab:eventsTab , changeTab:setEventsTab } = useTabSync("events", "All");
   const filteredVestings =
        eventsTab === "All"
        ? VestingEventsData
        : VestingEventsData.reduce<VestingEventGroup[]>((acc, group) => {
        const filteredEvents = group.events.filter((event) =>
        event.categories.includes(eventsTab)
        );

        if (filteredEvents.length > 0) {
        acc.push({ ...group, events: filteredEvents });
        }

        return acc;
    }, []);

    
  return (
   <ComponentContainer pad="0px">
        <div className="flex flex-col pb-[20px]">
            <div className="flex flex-col w-full gap-[20px] p-[32px] border-b border-[#2B3640]">
                <h2 className="font-semibold text-[14px]/[20px] tracking-[-0.3%] text-white">Unlock events</h2>
                <div className="flex w-full flex-wrap md:flex-nowrap items-center gap-[6px]">
                    {unlockEventsBtns.map((btn,i)=> (
                        <button 
                        key={i} 
                        className={`flex items-center py-[10px] px-[12px] text-white text-[12px]/[18px] font-medium tracking-[-0.25%] rounded-[10px] cursor-pointer
                        ${eventsTab === btn ? `border border-[#2B3640] bg-[#19212A]`:`border-none bg-[#151C23]`}
                        `}
                        onClick={() => setEventsTab(btn)}
                        >
                            {btn}
                        </button>
                    ))}
                </div>
            </div>
            <div className="w-full overflow-x-scroll scrollbar-hide ">
                {filteredVestings.flatMap(({ date, daysRemaining, events })=> events.map(group=>(

                    <div key={group.id} className="w-[1392px] px-[32px] h-auto flex items-stretch">
                        <div className="flex flex-col gap-[113px] w-[30%] py-[64.5px] border-r border-[#2B3640]">
                            <LeftEventArrow date={date} daysRemaining={daysRemaining}/>             
                        </div>
                        <div className="flex flex-col w-[70%] h-full gap-[32px] pl-[34px] py-[24px]">
                            <div className="flex items-stretch border border-[#2B3640] rounded-[12px] p-[24px] w-full justify-between">
                                <div className="">
                                    <h3 className="font-semibold text-[14px]/[20px] h-[10px] tracking-[-0.3%] mb-[20px] align-[cap] text-white">{group.title}</h3>
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col gap-[24px] align-start">
                                            <p className="text-[#84919F] font-semibold text-[12px]/[18px] h-[9px] align-[cap] tracking-[-0.25%]">
                                            Name
                                            </p>
                                            <LineItem revColor="#FEB752" revType="Team and Advisors"/>
                                            <LineItem revColor="#14C784" revType="Investors"/>
                                        </div>
                                        <div className="flex flex-col gap-[24px] text-[12px]/[18px] font-semibold align-[cap] text-right text-white">
                                            <p className="text-[#84919F] h-[9px]">% of Allocation</p>
                                            <p>{`+2.08%(+56.12M tokens)`}</p>
                                            <p>{`+2.08%(+36.51M tokens)`}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-fit h-full">
                                    <h2 className="font-semibold align-[cap] text-[14px]/[20px] mb-[12px] tracking-[-0.3%] text-white">{`${group.unlockPercentage}% to be unlocked`}</h2>
                                    <div className="flex items-center gap-[32px]">
                                        <Image src="/events-chart.svg" width={0} height={0} className="w-[91px] h-[91px]" alt="events unlock chart"/>
                                        <div className="flex flex-col gap-[16px] text-white font-medium align-[cap] text-[12px]/[18px] tracking-[-0.25%]">
                                            <span className="flex items-center w-full gap-[4px]">
                                                <p className="">DEC 4.89B</p>
                                                <Image src="/info-icon.svg" width={0} height={0} className="w-[12px] h-[12px]" alt="info icon"/>
                                            </span>
                                            <span className="flex items-center w-full gap-[4px]">
                                                <p className="">{group.tokenAmount}</p>
                                                <Image src="/info-icon.svg" width={0} height={0} className="w-[12px] h-[12px]" alt="info icon"/>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )) 
                )}
            </div>

        </div>
   </ComponentContainer>
  )
}

export default UnlockEventsSection;

const unlockEventsBtns = ["All", "Airdrops" , "Team & Advisors", "Investors"];