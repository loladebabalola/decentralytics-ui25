import Financials from "../Financials"
import TotalTreasury from "../TotalTreasury"


const HeroSection = () => {
  return (
    <section className=" w-full h-auto mt-[24px] bg-[#151C23] rounded-md overflow-hidden">
      <div className="w-full h-auto md:flex md:justify-between xl:gap-[24px]">
        <TotalTreasury/>
        <Financials/>
      </div>
    </section>
  )
}

export default HeroSection