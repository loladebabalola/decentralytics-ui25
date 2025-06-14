"use client"
import { ProposalItem } from "@/app/utils/interface"
import Image from "next/image"
import { useMemo, useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import CardBtn from "@/app/appcomponents/CardBtn";
import { useTabSync } from "@/app/utils/hooks/useTabSync";

const GovProposalsTable = ({proposals}: {proposals: ProposalItem[]}) => {
    const {activeTab:proposalTab , changeTab:setProposalTab} = useTabSync("tab", "All");
    
    const parentRef = useRef<HTMLDivElement>(null); 
    const handleColor = (status: string) =>{
        switch(status){
            case "Queued":
                return "bg-[#FEB752]";
            case "Preliminary discussion":
                return "bg-[#2DC0CB] ";
            case "Completed":
                return "bg-[#14C784] ";
            case "Failed":
                return "bg-[#F54842] ";
            case "Succeeded":
                return "bg-[#1E80FF] ";
            case "Active Vote":
                return "bg-[#AF7AFA]" 
            default:
                return "bg-[#70808F]";
        }
    };

    const filteredProposals = useMemo(()=>{
        if(proposalTab === "All") return proposals;
        return proposals.filter((proposal)=>{
            return proposal.status === proposalTab;
        });
    }, [proposalTab, proposals]);

    const rowVirtualizer = useVirtualizer({
        count: filteredProposals.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 40,
        overscan: 5
    });
    const handleSelectedParam = (param: string) => {
        setProposalTab(param);
    };
    return (
        <div  ref={parentRef} className="w-full overflow-x-scroll scrollbar-hide">
            <div className="flex flex-col gap-[16px]">
                <div className="flex items-start justify-between">
                    <div className="flex-1 flex flex-wrap gap-[16px]">
                        {
                            proposalQueryParams.map((param, idx)=>(
                                <button key={idx} 
                                onClick={()=> handleSelectedParam(param)}
                                className={`flex items-center justify-center rounded-[10px] shrink-0 bg-[#19212A] py-[10px] px-[12px] font-medium text-[12px]/[18px] tracking-[-0.25%] align-[cap] text-white 
                                    ${param === proposalTab ? "border-[#2B3640] border" : "border-transparent"}`}>
                                    {param}
                                </button>
                            ))
                        }
                    </div>
                    <div className="flex flex-col gap-[8px] w-[40%] md:w-fit md:flex-row flex-shrink-0 justify-end">
                        <CardBtn btnName="All categories"/>
                        <CardBtn btnName="All stages"/>
                        <CardBtn btnName="All sectors"/>
                    </div>
                </div>
                <div className="flex items-center gap-[10px] rounded-[8px] py-[7px] px-[8px] bg-[#19212A]">
                    <Image src="/search-icon.svg" width={0} height={0} className="w-[16px] h-[16px]" alt="search icon"/>
                    <input type="text" placeholder="Search..." className="w-full bg-transparent text-white placeholder:text-[#70808F] placeholder:text-[12px]/[18px] tracking-[-0.25%] align-[cap] text-white border-none outline-none"/>
                </div>
            </div>
            <table className="w-[1344px] h-auto">
                <thead>
                    <tr>
                        <th className={`${headClass} text-left w-[465px] py-[10px]`}>Proposal</th>
                        <th className={`${headClass} text-left w-[139px] py-[10px]`}>
                            <div className="flex items-center gap-[8px]">
                                <Image src="/switch-vertical.png" width={0} height={0} className="w-[12px] h-[12px]" alt="sort icon"/>
                                <p>Created</p>
                            </div>
                        </th>
                        <th className={`${headClass} text-left w-[188px] py-[10px]`}> DAO Name</th>
                        <th className={`${headClass} text-left w-[255px] py-[10px]`}>Stage</th>
                        <th className={`${headClass} text-left w-[163.5px] py-[10px]`}>
                            <div className="flex items-center gap-[8px]">
                                <Image src="/switch-vertical.png" width={0} height={0} className="w-[12px] h-[12px]" alt="sort icon"/>
                                <p>Category</p>
                            </div>
                        </th>
                        <th className={`${headClass} text-left w-[163.5px] py-[10px]`}>
                            <div className="flex row-reverse items-center gap-[8px]">
                                <p>Sector</p>
                                <div className="w-[8px] h-[8px] rounded-[50%]" />
                            </div>
                        </th> 
                    </tr>
                </thead>
                <tbody>
                    {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                        const proposal = filteredProposals[virtualRow.index];
                        return (
                            <tr key={proposal.id}>
                            <td className={tableClass} style={{textAlign: "left"}}>{proposal.title.slice(0, proposal.title.length-1)}...</td>
                            <td className={tableClass}>{proposal.created}</td>
                            <td className="flex items-center gap-[4px]">
                                <Image src={proposal.daoImage} width={0} height={0} className="w-[24px] h-[24px]" alt="dao image"/>
                                <p className={tableClass}>{proposal.daoName}</p>
                            </td>
                            <td >
                                <div className="flex  items-center gap-[4px]">
                                    <div className={`w-[8px] h-[8px] rounded-[50%] ${handleColor(proposal.stage)}`} />
                                    <p className={tableClass}>{proposal.stage}</p>
                                </div>
                            </td>
                            <td className={tableClass}>
                               <p> {proposal.category}</p>
                            </td>
                            <td className={tableClass}>
                                <p>{proposal.sector}</p>
                            </td>
                        </tr>
                    )})}
                </tbody>
            </table>
        </div>
    )
}

export default GovProposalsTable;

const proposalQueryParams = [
    "All",
    "Open", 
    "Closed",
    "Pending",
];
const headClass = "text-[12px]/[18px] tracking-[-0.25%] align-[cap] text-[#70808F] font-semibold text-[#70808F]";
const tableClass = "text-[14px]/[20px] py-[10px] tracking-[-0.25%] text-white font-medium text-white align-[cap]";