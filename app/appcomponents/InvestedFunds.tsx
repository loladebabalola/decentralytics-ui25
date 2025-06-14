import infoIcon from "../../public/info-icon.svg"
import Image from 'next/image'
import InvestedFundsItems from "./InvestedFundsItems"


const InvestedFunds = () => {
  return (
    <div className="w-full">
        <div className="pt-[16px] pb-[24px] px-[16px] w-full">
          <span className="flex justify-between mb-[19.5px]">
            <h3 className='text-[12px]/[18px] font-semibold text-[#70808F] tracking-[-0.25%]'>Invested Funds</h3>
            <Image src={infoIcon} width={13.33} height={33.33} alt="see more"/>
          </span>
          <div className="w-full h-[20px] flex">
            <div className="w-[45%] h-auto relative bg-[#1E80FF] rounded-l-[4px]"/>
            <div className="relative h-auto w-[30%] bg-[#99C5FF]"/>
            <div className="w-[25%] h-auto relative bg-[#F0F6FF] rounded-r-[4px]"/>
          </div>
          <div className="mt-[24px]">
            <InvestedFundsItems />
          </div>
        </div>
    </div>
  )
}

export default InvestedFunds