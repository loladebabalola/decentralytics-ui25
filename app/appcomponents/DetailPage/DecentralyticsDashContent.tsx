"use client";
import DaoDetailFinanceTab from "./finance/DaoDetailFinanceTab";
import DaoDetailMembersTab from "./members/DaoDetailMembersTab";
import DaoMembersList from "./members/DaoMembersList";
import { useTabSync } from "../../utils/hooks/useTabSync";
import DaoDetailVestingTab from "./vesting/DaoDetailVestingTab";
import DaoDetailActivityTab from "./activityandcalender/DaoDetailActivityTab";
import DaoDetailGovernanceTab from "./governance/DaoDetailGovernanceTab";
import DaoDetailOverviewTab from "./overview/DaoDetailOverviewTab";
const DecentralyticsDashContent = () => {
    const { activeTab:detailTab, changeTab:setDetailTab } = useTabSync("tab", "Overview");
  return (
    <section className="w-full h-auto space-y-[24px]">
        <div className="w-full overflow-x-auto scrollbar-hide">
            <div className="w-fit flex gap-[12px] ">
                {DashboardTabContents.map((tab, idx)=>(
                    <button 
                    key={idx} 
                    className={`py-[11px] px-[12px] rounded-[12px] text-[14px]/[20px] tracking-[-0.3%] font-medium cursor-pointer shrink-0 ${tab === detailTab ? `bg-[#1E80FF] text-white`:`bg-[#11171D] text-[#1E80FF]`}`}
                    onClick={() => setDetailTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
        <div className="w-full h-auto">
           {detailTab === "Overview"  && <DaoDetailOverviewTab/>}
           {detailTab === "Finance"  && <DaoDetailFinanceTab/>}
           {detailTab === "Governance"  &&<DaoDetailGovernanceTab/>}
           {detailTab === "Members"  && <DaoDetailMembersTab/>}
           {detailTab === "Business"  && <DaoMembersList layout="list"/>}
           {detailTab=== "Vesting"  && <DaoDetailVestingTab/>}
           {detailTab=== "Activity calendar"  && <DaoDetailActivityTab/>}
        </div>
    </section>
  )
}

export default DecentralyticsDashContent;

export const DashboardTabContents = [
    "Overview","Finance","Vesting", "Governance", "Members", "Business", "Activity calendar"
]