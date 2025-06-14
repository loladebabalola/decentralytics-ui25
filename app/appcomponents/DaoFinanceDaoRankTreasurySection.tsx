import AssetsCards from './AssetsCards'
import DaoListContainer from './DaoListContainer'
import FinanceTreasuryDix from './FinanceTreasuryDix'


const DaoFinanceDaoRankTreasurySection = () => {
  return (
    <div className="w-full flex flex-col items-stretch gap-[24px] h-auto xl:flex-row xl:h-[819px]">
      <div className='w-full xl:w-[604px] overflow-x-scroll scrollbar-hide'>
        <div className="w-[604px] md:w-full flex flex-col gap-[24px]">
          <DaoListContainer />
          <FinanceTreasuryDix/>
        </div>
      </div> 
      <div className='w-full xl:w-[764px] overflow-x-scroll scrollbar-hide'>
        <div className='flex-1 w-[764px] md:w-full'>
          <AssetsCards />
        </div>
      </div>
    </div>
  )
}

export default DaoFinanceDaoRankTreasurySection