import NextUnlockEvent from "../../NextUnlockEvent"
import VestingAllocation from "../../VestingAllocation"
import VestingInfo from "../../VestingInfo"
import VestingTotalDescriptionBar from "../../VestingTotalDescriptionBar"


const DaoDetailTotalDistributionAllocation = () => {
  return (
   <div className="w-full h-full flex flex-col md:flex-row md:items-stretch gap-[24px]">
      <div className="w-full h-auto md:w-[60%] space-y-[24px]">
        <VestingTotalDescriptionBar/>
        <VestingAllocation/>
      </div>
      <div className="w-full h-full md:w-[40%] space-y-[24px]">
        <NextUnlockEvent/>
        <VestingInfo/>
      </div>
    </div>
  )
}

export default DaoDetailTotalDistributionAllocation