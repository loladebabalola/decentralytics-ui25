import GovTotalCard from "@/app/auth/governance/GovTotalCard"
import GovProposalCard from "@/app/auth/governance/GovProposalCard"
import GovVotersActAndVotersPart from "@/app/auth/governance/GovVotersActAndVotersPart"
import GovProposalsSection from "./GovProposalsSection"
import GovProposalVolumeAndVotingSection from "./GovProposalVolumeAndVotingSection"
import GovVotersTable from "./GovVotersTable"
const page = () => {
  return (
    <div className="flex flex-col gap-[24px] px-[24px] py-[20px]">
      <GovTotalCard />
      <GovProposalsSection />
      <GovProposalVolumeAndVotingSection />
      <GovProposalCard />
      <GovVotersActAndVotersPart />
      <GovVotersTable />
    </div>
  )
}

export default page