import React from 'react'
import DaoDetailExpenseCategories from '../DaoDetailExpenseCategories'
import DaoDetailRevenue from '../DaoDetailRevenue'


const DaoDetailExpenseRevenueSection = () => {
  return (
    <div className='w-full h-auto lg:h-[465px] xl:h-[465px] flex flex-col gap-[24px] lg:flex-row lg:items-stretch mb-[136px]'>
        <div className='flex-1 lg:min-w-[60%] h-full'>
        <DaoDetailExpenseCategories/>
      </div>
      <div className='flex-1 h-full'>
        <DaoDetailRevenue/>
      </div>
    </div>
  )
}

export default DaoDetailExpenseRevenueSection;