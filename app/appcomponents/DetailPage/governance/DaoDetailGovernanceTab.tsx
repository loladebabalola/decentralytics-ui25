import DaoDetailGovernanceScoreBoard from "./DaoDetailGovernanceScoreBoard"
import DaoDetailProposalsSection from "./DaoDetailProposalsSection"

const DaoDetailGovernanceTab = () => {
  return (
    <div className="w-full h-full space-y-[24px]">
      <DaoDetailGovernanceScoreBoard />
      <DaoDetailProposalsSection/>
    </div>
  )
}

export default DaoDetailGovernanceTab