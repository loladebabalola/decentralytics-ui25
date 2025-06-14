import { ProposalData } from "@/app/utils/data";
import Image from "next/image";
import openIcon from "../../public/proposal-icon.svg";
import closedIcon from "../../public/proposal-icon-inactive.svg";
import infoIcon from "../../public/info-icon.svg"
// import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { ImageNameValueDelta } from "../utils/interface";

const Proposal = () => {
  // const COLORS = ["#14C784", "#1E80FF", "#F54842"];
  // const total = ProposalData.closedData.reduce((acc, item) => acc + Number(item.value), 0);

  // const data = ProposalData.closedData.map(item => ({
  //   name: item.name,
  //   value: Number(item.value),
  //   percent: ((Number(item.value) / total) * 100).toFixed(2),
  // }));

  return (
    <div className="w-full opv-container h-[337px] py-[20px]">
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-full px-[16px] flex flex-col border-b border-[#151C23] pb-[20px]">
          <div className="h-auto ">
            <h3 className="text-[#70808F] text-[14px]/[20px] font-semibold tracking-[-0.3%] mb-[20px]">Proposal</h3>
            <h1 className=" text-[#FFFFFF] font-bold text-[26px]/[37px] tracking-[-0.7%]">{ProposalData.total_proposal}</h1>
            <h3 className="text-[#84919F] font-medium text-[12px]/[18px] mt-[16px]">All</h3>
          </div>
          <div className="w-full flex flex-col gap-[20px] text-[12px]/[18px]">
            <div className="flex gap-[6px] h-[9px]">
              <Image src={openIcon} width={8} height={8} className="w-auto h-auto" alt="open proposal"/>
              <span className="flex justify-between items-center w-full">
                <p className="font-medium text-[#84919F]">Open</p>
                <p className="font-semibold text-white">{ProposalData.totalOpen}</p>
              </span>
            </div>
            <div className="flex gap-[6px] h-[9px]">
              <Image src={closedIcon}width={8} height={8} className="w-auto h-auto" alt="closed proposal"/>
              <span className="flex justify-between items-center w-full">
                <p className="font-medium text-[#84919F]">Closed</p>
                <p className="font-semibold text-white">{ProposalData.totalClosed}</p>
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-full px-[16px] pt-[20px] ">
          <div className="flex items-center justify-between">
            <p className="text-[12px]/[18px] font-semibold tracking-[-0.25%] text-white">Closed proposals - {ProposalData.totalClosed}</p>
            <Image src={infoIcon} width={16} height={16} className="w-auto h-auto" alt="information icon"/>
          </div>
          <div className="w-full flex items-center gap-[20px] mt-[24px]">
            <div id="for-graph">
              <div className="w-[59px] h-[59px]"/>
            </div>
            <div className="w-full flex flex-col gap-[16px]">
              {ProposalData.closedData.map((cl, idx)=>(
              <ProposalFeeds
                key={idx}
                name={cl.name}
                value={cl.value}
                color={cl.color}
                delta={cl.delta}
              />
              ))}
            </div>
          </div>
        </div>    
      </div>
    </div>
  )
}

export default Proposal;

export const ProposalFeeds = ({name, value,color, delta}: ImageNameValueDelta) =>{
 return(
    <div className="w-full h-[9px] flex gap-[6px] items-center">
      <div className="w-[8px] h-[8px] rounded-[2px]" style={{backgroundColor:`${color}`}}/>
      <div className="flex justify-between gap-1 w-full h-[9px] items-center">
        <p className="text-[#84919F] font-medium text-[12px]/[18px] tracking-[-0.25%]">{name}</p>
        <p className="text-[#FFFFFF] text-[12px]/[18px] tracking-[-0.25%] font-semibold">{value}<span>{`(${delta})`}</span></p>
      </div>
    </div>
  )
}