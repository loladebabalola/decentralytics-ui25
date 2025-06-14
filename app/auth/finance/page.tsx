import DaoFinanceDaoRankTreasurySection from '@/app/appcomponents/DaoFinanceDaoRankTreasurySection';
import DaoFinanceExpenseCategory from '@/app/appcomponents/DaoFinanceExpenseCategory';
import HeroSection from '@/app/appcomponents/HeroSection';

const page = () => {
  return (
    <div className='flex flex-col gap-[24px] px-[24px]'>
      <HeroSection/>
      <DaoFinanceDaoRankTreasurySection/>
      <DaoFinanceExpenseCategory/>
    </div>
  )
}

export default page;