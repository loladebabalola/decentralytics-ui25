"use client";
import ComponentContainer from "../../appcomponents/ComponentContainer";
import { GovVotersPart } from "./GovVotersPart";
import { PaginatedListContainer } from "../../appcomponents/PaginatedListContainer";
import { GovProposalActivityCard } from "./GovProposalActivityCard";
import { GovProposalActivityItem, GovVoterParticipationItem } from "@/app/utils/interface";
import { GovProposalActAndVotersPart } from "@/app/utils/data";



const GovVotersActAndVotersPart = () => {
    return (
        <div className="w-full h-auto  flex flex-col lg:flex-row lg:items-stretch  gap-[24px] ">
            <div className="w-full lg:w-[50%]">
                <ComponentContainer hx="h-auto xl:h-[827px]">
                    <PaginatedListContainer
                        cardHeader="Proposal Activity"
                        list={GovProposalActAndVotersPart.proposalActivity}
                        renderItem={(item:GovProposalActivityItem, index: number) => {
                            return <GovProposalActivityCard
                            key={index}
                            rank={item.rank} name={item.name} 
                            sector={item.sector}
                            icon={item.icon}
                            proposals={item.proposals} 
                            />
                        }}
                        otherClasses="w-full h-[660px]"
                        pageMax={10}
                        listGap="10px"
                    />
                </ComponentContainer>
            </div>
            <div className="w-full lg:w-[50%]">
                <ComponentContainer hx="h-auto xl:h-[827px]">
                    <PaginatedListContainer
                        cardHeader="Voters Participation"
                        list={GovProposalActAndVotersPart.voterParticipation}
                        renderItem={(item:GovVoterParticipationItem, index:number) => {
                            return <GovVotersPart
                            key={index}
                             rank={item.rank} 
                             icon={item.icon} 
                             name={item.name}
                             sector={item.sector}
                             participation={item.participation}
                            />
                        }}
                        otherClasses="w-full h-[660px]"
                        pageMax={10}
                        listGap="10px"
                    />
                </ComponentContainer>
            </div>

        </div>
    )
}

export default GovVotersActAndVotersPart;