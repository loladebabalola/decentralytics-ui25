import { InvestmentData } from '@/app/utils/data'
import React from 'react'

// type InvestedFundsItemPops = {
//     color: string,
//     typeOfFunds: string,
//     amount: string
// }

const InvestedFundsItems = () => {
  return (
    <div className="w-full space-y-[20px]">
        { InvestmentData.map((invf, idx)=>(
            <div className='flex items-center justify-between' key={idx}>
                <span className="flex justify-between items-center gap-[6px]">
                    <div className={`w-[8px] aspect-square rounded-[2px]`} style={{backgroundColor: `${invf.color}`}} />
                    <p className="text-[#84919F] text-[12px]/[18px] font-medium">{invf.issue}</p>
                </span>
                <p className="text-[#FFFFFF] font-semibold text-[12px]/[18px] tracking-[-0.25%]">{invf.amount}</p>
            </div>
        )) }
    </div>
  )
}

export default InvestedFundsItems