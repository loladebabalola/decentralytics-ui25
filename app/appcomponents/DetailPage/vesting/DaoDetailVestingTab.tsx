import DaoDetailTotalDistributionAllocation from "./DaoDetailTotalDistributionAllocation";
import UnlockEventsSection from "./UnlockEventsSection";
import UpcomingUnlock from "./UpcomingUnlock";
import VestingScheduleSection from "./VestingScheduleSection";


const DaoDetailVestingTab = () => {
  return (
    <div className="w-full flex flex-col gap-[48px]">
      <DaoDetailTotalDistributionAllocation/>
      <VestingScheduleSection/> 
      <UnlockEventsSection/>
      <UpcomingUnlock/>
    </div>
  )
}

export default DaoDetailVestingTab;