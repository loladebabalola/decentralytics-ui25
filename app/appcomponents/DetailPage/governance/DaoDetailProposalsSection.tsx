import DaoDetailProposalViewRank from "../DaoDetailProposalViewRank";
import DoaDetailProposalsBunk from "./DaoDetailProposalsBunk";




const DaoDetailProposalsSection = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-stretch w-full h-auto gap-[24px]">
        <div className="w-full lg:w-[55%]">
            <DoaDetailProposalsBunk />
        </div>
        <div className="w-full lg:w-[43%]">
            <DaoDetailProposalViewRank/>
        </div>
    </div>
  )
}

export default DaoDetailProposalsSection;