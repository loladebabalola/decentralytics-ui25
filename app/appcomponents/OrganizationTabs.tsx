import { organizationData } from "@/app/utils/data"

const OrganizationTabs = () => {
  return (
   
    <div className="w-full h-full  flex flex-col justify-between">
        <div>
            <div className="flex gap-[6px] items-center mb-[20px]">
                <div className="w-[8px] h-[8px] bg-[#1E80FF] rounded-[2px]"/>  
                <span className="w-full flex justify-between items-center gap-2">
                    <p className="text-[#84919F] font-medium text-[12px]/[18px] tracking-[-0.25%]">Active</p>
                    <p className="text-[#FFFFFF] text-[12px]/[18px] tracking-[-0.25%] font-semibold ">{organizationData.active}<span className="text-[#84919F] ml-[4px]">{`(${organizationData.incrActive})`}</span></p> 
                </span>  
            </div>
            <div className="flex gap-[6px] items-center">
                <div className="w-[8px] h-[8px] aspect-square bg-[#F54842] rounded-[2px]"/>  
                <span className="w-full flex justify-between items-center gap-2">
                    <p className="text-[#84919F] font-medium text-[12px]/[18px] tracking-[-0.25%]">Active</p>
                    <p className="text-[#FFFFFF] text-[12px]/[18px] tracking-[-0.25%] font-semibold ">{organizationData.Inactive}<span className="text-[#84919F] ml-[4px]">{`(${organizationData.incrInactive})`}</span></p> 
                </span>  
            </div>

        </div>
        <p className="text-[#84919F] font-medium text-[11px]/[17px] tracking-[-0.22%]">
            Inactive DAOs are DAOs with no new activity in the past 30 days***
        </p>
    </div>
  )
}

export default OrganizationTabs