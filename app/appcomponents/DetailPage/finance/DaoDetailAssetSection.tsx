import React from 'react';
import AssetsTable from '../../AssetsTable';
import AssetsCards from '../../AssetsCards';


const DaoDetailAssetSection = () => {
  return (
    <div className=' w-full flex h-[1656px] xl:h-[773px] flex-col gap-[20px] xl:flex-row xl:gap-[20px] xl:items-center mb-[32px]'>
      <div className='flex-1 xl:w-[738px]'>
        <AssetsTable />
      </div>
      <div className='flex-1 xl:w-[633px]  w-full'>
        <AssetsCards />
      </div>
    </div>
  )
}

export default DaoDetailAssetSection;