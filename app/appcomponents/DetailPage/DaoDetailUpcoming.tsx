import Image from "next/image"


const  DaoDetailUpcoming = () => {
  return (
    <div className="w-full h-full p-[32px] rounded-[12px] bg-[#11171D]">
        <div className="w-full h-full">
            <div className="flex gap-[4px] items-center">
                <Image src="/calendar.svg" width={0} height={0} className="w-[20px] h-[20px]" alt="calender icon"/>
                <h1 className="text-white text-[18px]/[26px] align-[cap] tracking-[0.5%] font-bold">Upcoming event</h1>
            </div>
            
            <div className="w-full flex flex-col mt-[20px] lg:mt-[32px] rounded-[8px]">
                <div className="w-full mt-[12px] p-[10px] flex items-center rounded-[8px] bg-[#151C23]">
                    <Image src="/unlock-icon.svg" width={0} height={0} className="w-[20px] h-[20px]" alt="unlock icon"/>
                    <p className="font-semi-bold text-[14px]/[20px] tracking-[-0.3%] align-[cap] text-white">Token unlock - <span className="text-[#1E80FF]">in 10 days</span></p>
                </div>
                <div className="w-full h-[4px] rounded-l rounded-r rounded-[8px] bg-[#222B35] flex items-center">
                    <div className="w-[60%] h-full bg-[#1E80FF] rounded-l rounded-[4px]"/>
                </div>
            </div>
            <div className="w-full flex mt-[10px]  xl:mt-[26px]">
                <div className="w-1/2 h-auto text-left">
                    <h1 className="text-[18px]/[26px] align-[cap] tracking-[-0.5%] font-bold text-white mb-[16px]">10 days</h1>
                    <p className="text-[#84919F] text-[12px]/[15px]   sm:text-[14px]/[20px] align-[cap] tracking-[-0.3%] font-medium">13, aug, 2024</p>
                    <p className="text-[#84919F] text-[12px]/[15px]  sm:text-[14px]/[20px] align-[cap] tracking-[-0.3%] font-medium">2 rounds</p>
                </div>
                <div className="1/2 h-auto text-left">
                    <h1 className="text-[18px]/[26px] align-[cap] tracking-[-0.5%] font-bold text-white  mb-[16px]">81.8M</h1>
                    <p className="text-[#84919F] text-[12px]/[15px]  md:text-[14px]/[20px] align-[cap] tracking-[-0.3%] font-medium">0.87% of Total Supply</p>
                    <p className="text-[#84919F] text-[12px]/[15px]  md:text-[14px]/[20px] align-[cap] tracking-[-0.3%] font-medium">(0.87% of Market Cap)</p>
                </div>
            </div>
          
        </div>
    </div>
  )
}

export default DaoDetailUpcoming