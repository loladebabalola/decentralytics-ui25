import ComponentContainer from "../../ComponentContainer"
import VestingTable from "../../VestingTable";
import VestingMonthSpread from "../../VestingMonthSpread";

const VestingScheduleSection = () => {
  return (
    <ComponentContainer pad="32px">
      <div className="w-full h-full">
        <h1 className="font-semibold text-[14px]/[20px] tracking-[-0.3%] align-[cap] text-white">Vesting schedule</h1>
        <div className="w-full h-auto flex flex-col lg:flex-row lg:items-stretch lg:gap-[30px] xl:gap-[58px]" >
          <div className="w-full h-auto lg:w-[30%]">
            <VestingTable/>
          </div>
          <div className="w-full overflow-x-scroll lg:overflow-hidden scrollbar-hide">
            <VestingMonthSpread/>
          </div>
        </div>
      </div>
    </ComponentContainer>
  )
}

export default VestingScheduleSection;

export const VestingScheduleData = [
  {
    id: 1,
    category: "Team and Advisors", 
    value: 0, 
    month: "DEC", 
    totalPrice: "4.5B", 
    percentage: 28.9, 
    color: "#FEB752",
    icon: ""
  },
  {
    id: 2,
    category: "DAO Treasury", 
    value: 0, 
    month: "DEC", 
    totalPrice: "4.5B", 
    percentage: 28.9, 
    color: "#1E80FF",
    icon: ""
  },
  {
    id: 3,
    category: "Investors", 
    value: 100, 
    month: "DEC", 
    totalPrice: "4.5B", 
    percentage: 28.9, 
    color: "#14C784",
    icon: ""
  },
  {
    id: 4,
    category: "Airdrop", 
    value: 100, 
    month: "DEC", 
    totalPrice: "4.5B", 
    percentage: 28.9, 
    color: "#61D4E5",
    icon: ""

  },
  {
    id: 5,
    category: "Untracked", 
    value: 0, 
    month: "DEC", 
    totalPrice: "4.5B", 
    percentage: 28.9, 
    color: "#2B3640",
    icon: "/caret-down-icon.svg"
  },
]
export const tableClass = "text-white text-[12px]/[18px] tracking-[-0.25%] font-semibold align-[cap]";
export const unlockClass = "text-[white] align-[cap] text-[11px]/[17px] tracking-[-0.22%] font-semibold"