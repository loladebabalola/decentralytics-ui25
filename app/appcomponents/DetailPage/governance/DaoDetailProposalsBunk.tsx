"use client"
import { proposalsMainData } from "@/app/utils/data";
import { useState } from "react";
import ProposalsCard from "../../ProposalsCard";
import ProposalSearch from "../../ProposalSearch";
import ComponentContainer from "../../ComponentContainer";
import Image from "next/image";


const DoaDetailProposalsBunk = () => {
    const [activeTag, setActiveTag] = useState("All");
    const handleTagSwitch = (tag: string) => {
        setActiveTag(tag);
    }

    const filteredProposals = activeTag === "All" ? proposalsMainData : 
        proposalsMainData.filter(proposal => proposal.status === activeTag.toLowerCase());
  return (
    <ComponentContainer>
        <div className="w-full h-auto flex flex-col">
            <div className="w-full">
                <h1 className="text-[18px]/[26px] font-bold align-[cap] tracking-[-0.5%] text-white">Proposals</h1>
                <div className="flex mt-[24px] items-stretch w-full md:justify-between md:items-start">
                    <div className=" flex items-center gap-[8px] w-1/2 flex-wrap">
                        {filterTagsOne.map((tag, idx) => (
                            <button
                            key={idx} 
                            className={`bg-[#19212A] rounded-[10px] py-[10px] px-[12px] shrink-0 font-medium text-[12px]/[18px] tracking-[-0.25%] align-[cap] text-white
                                ${activeTag === tag ? `border border-[#2B3640]`:`border-none`}`}
                            onClick={() => handleTagSwitch(tag)}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                    <div  className="flex items-center gap-[8px] w-1/2 flex-wrap">
                        {filterTagsTwo.map((tag,idx)=>(
                            <button 
                            key={idx}
                            className="flex items-center gap-[4px] rounded-[10px] shrink-1 bg-[#19212A] py-[10px] px-[12px] font-medium text-[12px]/[18px] tracking-[-0.25%] align-[cap] text-white"
                            >
                                {tag}
                                <Image src="/caret-down-icon.svg" width={0} height={0} className="w-[10px] h-[10px]" alt="caret down icon"/>
                            </button>
                        ))}
                    </div>
                </div>
                <ProposalSearch/>
            </div>
            <div className="mt-[24px] flex flex-col gap-[24px]"> 
                {filteredProposals.map(proposal =>
                    <ProposalsCard
                    key={proposal.id}
                    abstain={proposal.votes.abstain}
                    against={proposal.votes.against}
                    voteFor={proposal.votes.for}
                    total={proposal.votes.total}
                    createdAt={proposal.createdAt}
                    propDetail={proposal.description}
                    propImage="/Bitcoin.svg"
                    propName={proposal.author}
                    propTags={proposal.tags}
                    status={proposal.status}
                    result={proposal.result}
                    stage={proposal.stage}
                    />
                )}
            </div>
        </div>
    </ComponentContainer>
)
}
export default DoaDetailProposalsBunk;

export const filterTagsOne = ["All","Open","Closed","Pending"]
export const filterTagsTwo = ["On and Off-chain","All stages","All category"]