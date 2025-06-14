import { VotersData } from "@/app/utils/data"
import { ImageNameValueDelta } from "../utils/interface"
const Voters = () => {
  return (
    <div className="w-full opv-container py-[20px] px-[16px] h-[337px]">
        <div className="h-full w-full flex flex-col">
            <div className="">
                <h3 className="text-[#70808F] text-[14px]/[20px] font-semibold tracking-[-0.3%] mb-[20px]">Voters</h3>
                <h1 className="mb-[16px] text-[#FFFFFF] font-bold text-[26px]/[37px] tracking-[-0.7%]">{VotersData.total_visitors}</h1>
                <span className="text-[#70808F] font-semibold text-[14px]/[20px]">All</span>
            </div>
            <div className="w-full h-[20px] relative  flex mt-[24px]">
                <div className="bg-[#14C784] w-4/5 h-[20px] rounded-l-[4px]"/>
                <div className="bg-[#ECFDF7] w-1/5 h-[20px] rounded-r-[4px] "/>
            </div>
            <div className="w-full space-y-[20px] h-auto mt-[24px]">
                {VotersData.allData.map((vote, idx) => (
                    <VoterTab
                        key={idx}
                        color={vote.color}
                        name={vote.name}
                        value={vote.value}
                        delta={vote.delta}
                    />
                ))}
            </div>
            <div className="h-full w-full  flex flex-col justify-end">
                <p className="text-[11px]/[17px] font-medium tracking-[-0.22%] text-[#84919F]">
                    {`Voters represent token holders in selected DAO(S)***`}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Voters

export const VoterTab = ({color,name,value,delta}: ImageNameValueDelta) =>{
    return(
        <div className="flex gap-[6px] w-full items-center">
            <div className="w-[8px] h-[8px] rounded-[2px]" style={{backgroundColor:`${color}`}}/>
            <div className="flex justify-between gap-1 w-full">
                <p className="text-[#84919F] font-medium text-[12px]/[18px] tracking-[-0.25%]">{name}</p>
                <p className="text-[#FFFFFF] text-[12px]/[18px] tracking-[-0.25%] font-semibold">{value}<span>{`(${delta})`}</span></p>
            </div>
        </div>
    )
}