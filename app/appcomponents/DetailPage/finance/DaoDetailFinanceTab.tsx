import DaoDetailAssetSection from "./DaoDetailAssetSection"
import DaoDetailExpenseRevenueSection from "./DaoDetailExpenseRevenueSection"
import HeroSection from "../../HeroSection"

const DaoDetailFinanceTab = () => {
  return (
    <div className="space-y-[24px] w-full h-auto">
      <HeroSection/>
      <DaoDetailAssetSection/>
      <DaoDetailExpenseRevenueSection/>
    </div>
  )
}

export default DaoDetailFinanceTab