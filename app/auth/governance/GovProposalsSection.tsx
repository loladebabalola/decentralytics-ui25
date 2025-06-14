"use client";
import { Suspense } from "react";
import { GovProposalData } from "@/app/utils/data";
import ComponentContainer from "@/app/appcomponents/ComponentContainer";
import dynamic from "next/dynamic";

const GovProposalsTable = dynamic(()=>import("./GovProposalsTable"), {
    loading: ()=> <div className="flex items-center justify-center h-full">Loading...</div>,
    ssr: false,
});

const GovProposalsSection = () => {
    return (
        <ComponentContainer pdx='24px' pdy='20px' direction="vertical" gap={48}>
            <div className="flex flex-col gap-[24px]">
                <p className="font-bold text-[18px]/[26px] tracking-[-0.5%] align-[cap] text-white">Proposals</p>
            </div>
            <Suspense fallback={<div className="flex items-center justify-center h-full">Loading...</div>}>
                <GovProposalsTable proposals={GovProposalData[0].proposals}/>
            </Suspense>
        </ComponentContainer>
    )
}

export default GovProposalsSection;