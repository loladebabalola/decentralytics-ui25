import Image from "next/image";
import { useDaoStore } from "../../utils/stores/daoStore";
import ComponentContainer from "../ComponentContainer"


const DaoDetailMembers = () => {
    const dao = useDaoStore(state => state.selectedDao);
    // const memebers = [
    //   {name: "Active", value: "80K - 66%",rate: "66%", color: "#7AB4FF"},
    //   {name: "Inactive", value: "32K - 34%",rate:"34%", color: "#FFFFFF"}
    // ]
  return (
    <ComponentContainer direction="vertical">
      <div className="w-full flex align-end h-full justify-between ">
       <div className="flex flex-col w-1/2 md:w-[80%] gap-[5px] xl:gap-[16px]">
          <h3 className="text-[#84919F] text-[14px]/[20px] align-[cap] tracking-[-0.3%] font-medium">Members</h3>
          <h1 className="font-bold text-[22px]/[29px] align-[cap] tracking-[-0.6%] text-white">{dao?.votes}</h1>
       </div>
        <button 
        className="bg-[#529DFF14] py-[4px] pl-[10px] pr-[12px] rounded-[18px] flex items-center gap-[4px] text-[#1E80FF] self-end">
          <Image src="/website-link-icon.svg"  width={0} height={0} className="w-[20px] h-[20px]" alt={`join ${dao?.dao_name}'s website icon`}/>
          join DAO
        </button>
      </div>
      <div className="flex items-center gap-[6px] h-auto mt-[32px] ">
        <div className="w-[66%] flex flex-col">
          <div className="w-full rounded-[4px] bg-[#1E80FF] h-[40px]"/>
          <div className="w-full h-full mt-[16px]">
            <p className="text-[#84919F] text-[14px]/[20px] tracking-[-0.3%] font-medium align-[cap] mb-[8px] xl:mb-[16px]">Active</p>
            <div className="flex items-center shrink-0 gap-[4px]">
              <div className="w-[10px] h-[10px] rounded-[2px] bg-[#7AB4FF]"/>
              <p className="text-white tracking-[-0.5%] text-[10px]/[13px] sm:text-[16px]/[24px] align-[cap] font-semibold">80K-66%</p>
            </div>
          </div>
        </div>
        <div className="w-[34%] flex flex-col">
          <div className="w-full h-[40px] rounded-[4px] bg-white"/>
          <div className="w-full h-full mt-[16px]">
            <p  className="text-[#84919F] text-[14px]/[20px] tracking-[-0.3%] font-medium align-[cap] mb-[8px] xl:mb-[16px]">Inactive</p>
            <div className="flex items-center shrink-0 gap-[4px]">
              <div className="w-[10px] h-[10px] rounded-[2px] bg-white"/>
              <p className="text-white tracking-[-0.5%] text-[10px]/[13px] sm:text-[16px]/[24px] align-[cap] font-semibold">32K - 34%</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[#84919F] text-[11px]/[17px] tracking-[-0.2%] align-[cap] font-medium mt-[18px] xl:mt-[48px]">Inactive members refer to members with no economic or voting action in the past 30 days***</p>
    </ComponentContainer>
  )
}

export default DaoDetailMembers