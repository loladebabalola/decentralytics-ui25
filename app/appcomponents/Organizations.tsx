import { organizationData } from "@/app/utils/data"
import OrganizationTabs from "./OrganizationTabs"
import DeltaUp from "../../public/deltaUp.svg"
import Image from "next/image"


const Organizations = () => {
  return (
    <div className="w-full opv-container pt-[20px] pb-[16px] h-[337px]">
      <div className="w-full h-full px-[16px] flex flex-col gap-[18px]">
        <div className="flex w-full ">
          <div className="h-auto">
            <h3 className="text-[#70808F] text-[14px]/[20px] font-semibold tracking-[-0.3%] mb-[20px]">
              Organizations
            </h3> 
            <h1 className="text-[#FFFFFF] font-bold text-[26px]/[37px] tracking-[-0.7%] mb-[16px]">
             {organizationData.total_amount}
            </h1>    
            <div className="flex font-medium text-[12px]/[18px] tracking-[-0.25%] gap-[8px]">
              <span className="flex items-center gap-[2px]">
                <Image src={DeltaUp} width={20} height={20} className="w-auto h-auto" alt="increase in price"/>
                <p className="text-[#14C784]">{organizationData.delta}</p>
              </span>
              <p className="text-[#84919F]">{organizationData.deltaTime}</p>
            </div>
          </div>
          <div id="org-graph">

          </div>
        </div> 
        <OrganizationTabs/> 
      </div>                                                                                                                                                                                                                                                                                                                         
    </div>
  )
}

export default Organizations
