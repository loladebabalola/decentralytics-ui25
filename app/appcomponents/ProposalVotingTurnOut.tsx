import React from 'react'
import ComponentContainer from './ComponentContainer'
import Image from 'next/image'


const ProposalVotingTurnOut = () => {
  return (
   <ComponentContainer>
        <div>
            <div className='flex items-start'>
                <div className='flex items-center w-full'>
                    <div className='flex items-center gap-[4px] w-[50%]'>
                        <Image src="/voting-icon.svg" width={0} height={0} className="w-[20px] h-[20px]" alt="voting icon"/>
                        <h1 className='font-bold text-[18px]/[28px] tracking-[-0.25%] text-white'>Voting turnout</h1>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-[12px] w-[50%]'>
                        <button className='bg-[#151C23] rounded-[10px] text-white flex items-center justify-center gap-[8px] py-[10px] px-[12px] text-[12px]/[18px] align-[cap] tracking-[-0.25%] font-medium'>
                            All categories 
                            <Image src="/caret-down-icon.svg" width={0} height={0} className="w-[10px] h-[10px]" alt='caret icon'/>
                        </button>
                        <button className='bg-[#151C23] rounded-[10px] text-white flex items-center justify-center gap-[8px] py-[10px] px-[12px] text-[12px]/[18px] align-[cap] tracking-[-0.25%] font-medium'>
                            All platforms 
                            <Image src="/caret-down-icon.svg" width={0} height={0} className="w-[10px] h-[10px]" alt='caret icon'/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto overflow-x-scroll scrollbar-hide ">
                <div className="h-[288px] w-[540px] bg-cover bg-center bg-no-repeat flex items-center" style={{
                    backgroundImage: `url(/voting-graph.png)`
                }}>
                    {/* <div className="w-[946.53px] h-[258px] mt-[50px] mb-[28px] ml-[67.47px] bg-contain bg-[bottom_bottom] bg-no-repeat" style={{
                        backgroundImage: `url()`
                    }}/> */}
                </div>
            </div>
           <div className='flex gap-[92px] justify-center items-center w-full mt-[36px]'>
                <div className='flex w-fit gap-[4px] items-center'>
                    <div className="bg-[#FEB752] w-[8px] h-[8px] rounded-[2px]"/>
                    <p className="font-medium text-[12px]/[18px] tracking-[-0.25%] text-white">Voters</p>
                </div>
                <div className='flex w-fit gap-[4px] items-center'>
                    <div className="bg-[#1E80FF] w-[8px] h-[8px] rounded-[2px]"/>
                    <p className="font-medium text-[12px]/[18px] tracking-[-0.25%] text-white">Voters</p>
                </div>
                <div className='flex w-fit gap-[4px] items-center'>
                    <div className="bg-[#14C784] w-[8px] h-[8px] rounded-[2px]"/>
                    <p className="font-medium text-[12px]/[18px] tracking-[-0.25%] text-white">Proposals</p>
                </div>
           </div>
        </div>
   </ComponentContainer>
  )
}

export default ProposalVotingTurnOut