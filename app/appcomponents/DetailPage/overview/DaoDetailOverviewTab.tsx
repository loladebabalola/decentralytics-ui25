import FoundersComponent from "../../FoundersComponent"
import DaoDetailBusinessTrendComponent from "./DaoDetailBusinessTrendComponent"
import DaoDetailMembersandUpcoming from "./DaoDetailMembersandUpcoming"
import DaoDetailTokenSection from "./DaoDetailTokenSection"


const DaoDetailOverviewTab = () => {
  return (
    <div className="space-y-[24px] w-full h-auto">
      <FoundersComponent/>
      <DaoDetailBusinessTrendComponent/>
      <DaoDetailMembersandUpcoming/>
      <DaoDetailTokenSection/> 
    </div>
  )
}

export default DaoDetailOverviewTab