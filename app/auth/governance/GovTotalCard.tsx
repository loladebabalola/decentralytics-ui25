import React from 'react'
import ComponentContainer from '../../appcomponents/ComponentContainer'
import CardBtn from '../../appcomponents/CardBtn'
import { GovProposalData } from '@/app/utils/data'

const GovTotalCard = () => {
  return (
    <ComponentContainer pdx='32px' pdy='24px' direction="vertical" gap={48}>
        <div className='w-full flex justify-between items-start'>
            <p className="font-bold text-[18px]/[26px] tracking-[-0.5%] align-[cap] text-white">Proposal overview</p>
            <div className="flex flex-col gap-[8px] w-[40%] md:w-fit md:flex-row flex-shrink-0 justify-end">
                <CardBtn btnName="All ecosystems" />    
                <CardBtn btnName="All sectors" />
            </div>
        </div>
        <div className='grid grid-cols-2 gap-y-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7' >
            {Object.entries(GovProposalData[0].proposalOverview).map(([key, value])=>(
                <div key={key} className='flex flex-col gap-[16px] items-start'>
                    <p className="font-bold text-[18px]/[26px] tracking-[-0.5%] align-[cap] text-white">{value}</p>
                    <p className="text-[12px]/[18px] tracking-[-0.5%] align-[cap] text-[#84919F]">{key}</p>
                </div>
            ))}
        </div>
    </ComponentContainer>
  )
};

export default GovTotalCard;