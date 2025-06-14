import ClosedProposals from "../ClosedProposals"
import ProposalGovTokenCard from "../ProposalGovTokenCard"
import ProposalVotingTurnOut from "../ProposalVotingTurnOut"
import SuccessfulProposals from "../SuccessfulProposals"

const DaoDetailProposalViewRank = () => {
  return (
   <div className="flex flex-col w-full h-full gap-[24px]">
        <ClosedProposals/>
        <ProposalVotingTurnOut/>
        <ProposalGovTokenCard/>
        <SuccessfulProposals/>
   </div>
  )
}

export default DaoDetailProposalViewRank