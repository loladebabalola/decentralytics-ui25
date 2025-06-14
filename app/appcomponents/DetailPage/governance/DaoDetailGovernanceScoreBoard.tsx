import { GovernanceDashContent } from "@/app/utils/data"
import Image from "next/image"


const DaoDetailGovernanceScoreBoard = () => {
  return (
    <div className="bg-[#11171D] rounded-[12px] pt-[24px] pb-[20px] px-[32px]">
       <div className="flex items-center flex-wrap space-y-[24px] md:space-y-0">
            {GovernanceDashContent.map((gov,idx)=>(
                <div key={idx} className="flex flex-col w-1/2 items-start justify-start md:max-w-[25%] lg:max-w-[14.28%] gap-[16px] shrink-0">
                    <h1 className="font-bold text-[18px]/[28px] tracking-[-0.5%] align-[cap] text-white">{gov.value}</h1>
                    <span className="flex items-center gap-[4px]">
                        <h3 className="text-[#84919F] text-[12px]/[18px] font-medium align-[cap] tracking-[-0.25%]">{gov.name}</h3>
                        {gov.icon !== "" ? 
                        <Image src={gov.icon} width={0} height={0} className="w-[10px] h-[10px]" alt="info icon"/> : <></>}
                    </span>
                </div>
            ))}
       </div>
    </div>
  )
}

export default DaoDetailGovernanceScoreBoard