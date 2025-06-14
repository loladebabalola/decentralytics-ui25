import ComponentContainer from "../ComponentContainer"
import LineItem from "../LineItem";


const DaoDetailExpenseCategories = () => {
  return (
  <ComponentContainer pad="32px" hx="h-full">
    <div className="w-full h-full">
      <div className="flex gap-[72px] w-full">
        <div className="flex flex-col gap-[16px]">
          <h3 className="text-[#84919F] text-[14px]/[20px] tracking-[-0.3%] align-[cap] font-medium">Expense categories</h3>
          <h1 className="text-white font-bold text-[22px]/[29px] tracking-[-0.8%]">12</h1>
        </div>
        <div className="flex flex-col gap-[16px]">
          <h3 className="text-[#84919F] text-[14px]/[20px] tracking-[-0.3%] align-[cap] font-medium">Total this year</h3>
          <h1 className="text-white font-bold text-[22px]/[29px] tracking-[-0.8%]">$8.8B</h1>
        </div>
      </div>
      <div className="flex h-[40px] w-full justify-between mt-[32px]">
        <div className="w-[40%] h-full rounded-[4px] bg-[#1E80FF]"/>
        <div className="w-[5%] h-full rounded-[4px] bg-[#14C784]"/>
        <div className="w-[5%] h-full rounded-[4px] bg-[#FEB752]"/>
        <div className="w-[5%] h-full rounded-[4px] bg-[#14C784]"/>
        <div className="w-[5%] h-full rounded-[4px] bg-[#1E80FF]"/>
        <div className="w-[5%] h-full rounded-[4px] bg-[#14C784]"/>
        <div className="w-[5%] h-full rounded-[4px] bg-[#61D4E5]"/>
        <div className="w-[5%] h-full rounded-[4px] bg-[#61D4E5]"/>
        <div className="w-[5%] h-full rounded-[4px] bg-[#FA7AC5]"/>
        <div className="w-[5%] h-full rounded-[4px] bg-[#FA7AC5]"/>
      </div>
      <div className="w-full flex h-full justify-between mt-[32px]">
        <div className="flex flex-col gap-[30px] w-[45%]">
          <LineItem revColor="#1E80FF" revType="Optimizational cost" revIn="$2.2B" revPerc="96.4%"/>
          <LineItem revColor="#FEB752" revType="Personnel" revIn="$2.2B" revPerc="96.4%"/>
          <LineItem revColor="#14C784" revType="Engineering" revIn="$2.2B" revPerc="96.4%"/>
          <LineItem revColor="#14C784" revType="Marketing" revIn="$2.2B" revPerc="96.4%"/>
          <LineItem revColor="#14C784" revType="Legal & compliance" revIn="$2.2B" revPerc="96.4%"/>
          <LineItem revColor="#14C784" revType="Research & Analytics" revIn="$2.2B" revPerc="96.4%"/>
          <LineItem revColor="#14C784" revType="Charity" revIn="$2.2B" revPerc="96.4%"/>
        </div>
        <div className="flex flex-col gap-[30px] w-[45%]">
          <LineItem revColor="#61D4E5" revType="Grants & investments" revIn="$2.2B" revPerc="96.4%"/>
          <LineItem revColor="#FA7AC5" revType="Patnership" revIn="$2.2B" revPerc="96.4%"/>
          <LineItem revColor="#FA7AC5" revType="Governance" revIn="$2.2B" revPerc="96.4%"/>
          <LineItem revColor="#FA7AC5" revType="Education & training" revIn="$2.2B" revPerc="96.4%"/>
          <LineItem revColor="#FA7AC5" revType="Tech support" revIn="$2.2B" revPerc="96.4%"/>
          <LineItem revColor="#14C784" revType="PR & comms" revIn="$2.2B" revPerc="96.4%"/>
          <LineItem revColor="#14C784" revType="Miscellaneous" revIn="$2.2B" revPerc="96.4%"/>
        </div>
      </div>
    </div>
  </ComponentContainer>
  )
}

export default DaoDetailExpenseCategories;