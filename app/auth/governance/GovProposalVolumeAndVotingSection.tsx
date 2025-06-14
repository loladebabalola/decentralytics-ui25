import { GovTokenCard } from "./GovTokenCard"

const GovProposalVolumeAndVotingSection = () => {
    return (
        <div className="w-full flex items-stretch flex-col gap-[24px] sm:flex-row lg:flex-row lg:justify-between xl:gap-[24px]">
            <GovTokenCard 
                cardHeading="Proposal Volume" 
                graphBg="/gov-token-graph-bg.png"
                graphImg="/gov-token-graph.png"
            />
            <GovTokenCard 
                cardHeading="Voting participation" 
                graphBg="/gov-token-graph-bg.png"
                graphImg="/gov-token-graph.png"
            />
        </div>
    )
};

export default GovProposalVolumeAndVotingSection;