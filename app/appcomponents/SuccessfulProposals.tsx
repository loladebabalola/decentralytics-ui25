import React from 'react'
import ComponentContainer from './ComponentContainer'
import LineItem from './LineItem'


const SuccessfulProposals = () => {
  return (
   <ComponentContainer pad="32px">
        <div className='w-full h-auto flex gap-[21px] flex-col'>
           <div className='w-full flex items-center gap-[72px]'>
               <div className='flex flex-col gap-[16px] w-fit '>
                   <h3 className='text-[#84919F] text-[14px]/[20px] tracking-[-0.3%] align-[cap] font-medium'>Successful proposals</h3>
                   <h1 className='text-white text-[22px]/[29px] font-bold align-[cap] tracking-[-0.6%]'>53</h1>
               </div>
               <div className='flex flex-col gap-[16px] w-fit'>
               <h3 className='text-[#84919F] text-[14px]/[20px] tracking-[-0.3%] align-[cap] font-medium'>Categories</h3>
               <h1 className='text-white text-[22px]/[29px] font-bold align-[cap] tracking-[-0.6%]'>4</h1>
               </div>
           </div>
           <div className='w-full h-[40px] flex items-center justify-between mt-[32px]'>
               <div className='w-[50%] bg-[#1E80FF] h-full rounded-[4px]'/>
               <div className='w-[15%] bg-[#FEB752] h-full rounded-[4px]'/>
               <div className='w-[15%] bg-[#61D4E5] h-full rounded-[4px]'/>
               <div className='w-[15%] bg-[#FA7AC5] h-full rounded-[4px]'/>
           </div>
           <div className='w-full flex items-start justify-between h-full mt-[32px]'>
               <div className='flex flex-col gap-[32px] w-[46%]'>
                   <LineItem revColor='#1E80FF' revType='Financial' revIn='20' revPerc='40%'/>
                   <LineItem revColor='#FEB752' revType='Governance' revIn='15' revPerc='20%'/>
                   <LineItem revColor='#FEB752' revType='Governance' revIn='15' revPerc='20%'/>
                   <LineItem revColor='#FEB752' revType='Governance' revIn='15' revPerc='20%'/>
               </div>
               <div className='flex flex-col gap-[32px] w-[46%]'>
                   <LineItem revColor='#61D4E5' revType='Community development' revIn='15' revPerc='20%'/>
                   <LineItem revColor='#FA7AC5' revType='Operational' revIn='3' revPerc='20%'/>
                   <LineItem revColor='#FA7AC5' revType='Operational' revIn='3' revPerc='20%'/>
                   <LineItem revColor='#FA7AC5' revType='Operational' revIn='3' revPerc='20%'/>
               </div>
           </div>
        </div>
    </ComponentContainer>
  )
}

export default SuccessfulProposals