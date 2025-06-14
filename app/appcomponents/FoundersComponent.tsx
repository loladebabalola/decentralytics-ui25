import React from 'react'
import FoundersCard from './DetailPage/overview/FoundersCard'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import ComponentContainer from './ComponentContainer'


const FoundersComponent = () => {
  return (
    <ComponentContainer direction='vertical'>
      <p className="font-bold text-[18px]/[26px] mb-[40px] tracking-[-0.5%] align-[cap] text-white">Founded Aug, 2024 by...</p>
      <div className="w-full  h-auto flex flex-col md:flex-row md:items-stretch gap-[20px] lg:gap-[30px] xl:gap-[64px] items-center">
        <FoundersCard founder_name="Elizabeth Yin" founder_img="/founder-1.png"/>
        <FoundersCard founder_name="Vicent Smith" founder_img="/founder-2.png"/>
      </div>
      <div className='w-full flex justify-between items-center mt-[24px]'>
        <button className='w-[32px] h-[32px] rounded-[50%]'>
          <ArrowLeft className='text-[#70808F]'/>
        </button>
        <button className='w-[32px] h-[32px] rounded-[50%]'>
          <ArrowRight className='text-white'/>
        </button>
      </div>
    </ComponentContainer>
    
  )
}

export default FoundersComponent