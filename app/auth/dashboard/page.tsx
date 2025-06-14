import DaoDistributions from "@/app/appcomponents/DaoDistributions";
import DaoKeys from "@/app/appcomponents/DaoKeys";
import FilterBar from "@/app/appcomponents/FilterBar";
import HeroSection from "@/app/appcomponents/HeroSection";
import OrganizationDashboardPanel from "@/app/appcomponents/OrganizationDashboardPanel";
import Organizations from "@/app/appcomponents/Organizations";
import Proposal from "@/app/appcomponents/Proposal";
import Voters from "@/app/appcomponents/Voters";


const page = () => {
  return (
   <section className="px-[24px] py-[20px]  bg-[#060D13] border-none w-full overflow-x-hidden space-y-[24px]">
      <div className=" flex items-center w-full">
        <div className="w-4/6 overflow-x-scroll scrollbar-hide sm:w-[95%] rounded-r-[12px]">
          <DaoKeys/>
        </div>
        <div className="w-2/6 flex justify-end sm:w-[5%]">
          <FilterBar/>
        </div>
      </div>
      <HeroSection/>
      <div className="w-full block md:flex md:gap-[24px] space-y-[24px]">
        <Organizations/>
        <Proposal/>
        <Voters/>
      </div>  
      <DaoDistributions/>
      <OrganizationDashboardPanel/>
   </section>
  )
}

export default page