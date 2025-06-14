import { GovVoterParticipationItem } from "@/app/utils/interface"
import Image from "next/image"


export const GovVotersPart = ({rank,name,sector,icon,participation}:GovVoterParticipationItem) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-[8px]">
                <span className="text-[11px]/[17px] font-bold leading-[17px] text-center font-semibold tracking-[-0.22%] rounded-[50%] text-white">
                   {rank}
                </span>
                <Image src={icon} width={0} height={0} className="w-[40px] h-[40px]" alt={`${name}-icon`} />
                <div className="flex flex-col gap-[4px]">
                    <h1 className="text-[14px]/[20px] font-bold text-white align-[cap] leading-[20px] tracking-[-0.3%]">{name}</h1>
                    <span className="w-fit text-[12px]/[16px] p-[8px] text-white rounded-[14px] bg-[#151C23]">
                        {sector}
                    </span>
                </div>
            </div>
            <div className="flex justify-center items-center w-fit">
                <h1 className="text-[14px]/[20px] align-[cap] tracking-[-0.3%] font-bold text-white">{participation}</h1>
            </div>
        </div>
    )
}