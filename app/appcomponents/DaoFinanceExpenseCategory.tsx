import Image from "next/image";
import FinExpenseCategory from "./FinExpenseCategory"
import LineItem from "./LineItem";
import CardBtn from "./CardBtn";
import ComponentContainer from "./ComponentContainer";


const DaoFinanceExpenseCategory = () => {
  return (
    <div className="flex flex-col xl:flex-row h-auto xl:h-[465px] gap-[24px] lg:items-stretch">
      <div className="w-full overflow-x-scroll xl:w-[888px] scrollbar-hide h-full">
        <div className="w-[888px] lg:w-full xl:w-[888px] h-full">
          <FinExpenseCategory
            headText="Expenses categories"
            subText="Total this year"
            barData={ExpenseCategory}
            totalPrice={Math.trunc(ExpenseCategory.reduce((acc, item)=> acc + item.perPrice , 0) * 100)/100 }
            totalProposal={ExpenseCategory.length}
            otherClasses="xl:h-[465px]"
          />
        </div>
      </div>
      <div className="w-full xl:w-[480px] h-full">
        <ComponentContainer hx={`h-full lg:h-[465px]`} pad="32px">
          <div className="w-full flex items-stretch  justify-between">

            <div className="flex flex-col gap-[48px]">

              <div className="flex flex-col gap-[20px]">
                <LineItem revType="Total revenue" revColor="#1E80FF"/>
                <div className="flex flex-col gap-[16px]">
                  <h1 className="text-white font-bold text-[26px]/[37px] leading-none tracking-[-0.7%] align-[cap]">3.2B</h1>
                  <div className="flex items-center gap-[4px] text-[12px]/[18px] leading-none align-[cap] tracking-[-0.25%]">
                    <span className="flex items-center gap-[2px]">
                      <Image src="/deltaUp.svg" width={0} height={0} className="" alt="up trend icon"/>
                      <p className="text-[#14C784] font-medium ">+1.9B</p>
                    </span>
                    <p className="font-medium text-[#84919F]">From prev. year</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <LineItem revType="Total expenses" revColor="#1E80FF"/>
                <div className="flex flex-col gap-[16px]">
                  <h1 className="text-white font-bold text-[26px]/[37px] leading-none tracking-[-0.7%] align-[cap]">300M</h1>
                  <div className="flex items-center gap-[4px] text-[12px]/[18px] leading-none align-[cap] tracking-[-0.25%]">
                    <span className="flex items-center gap-[2px]">
                      <Image src="/deltaUp.svg" width={0} height={0} className="" alt="up trend icon"/>
                      <p className="text-[#14C784] font-medium ">+1.9B</p>
                    </span>
                    <p className="font-medium text-[#84919F]">From prev. year</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="flex flex-col items-center gap-[40px]">
              <div className="w-fit">
                <CardBtn btnName="This year"/>
              </div>
              <Image src="/donut-chart.svg" width={0} height={0} className="w-[163px] h-[163px]" alt="finance revenue chart"/>
            </div>

          </div>
        </ComponentContainer>
      </div>
    </div>
  )
}

export default DaoFinanceExpenseCategory;

const ExpenseCategory = [
  {id: 1, name: "Operational Cost", perPrice: 2.2 , percIncr: 20, color: "#1E80FF" },
  {id: 2, name: "Personnel", perPrice: 2.2 , percIncr: 20, color: "#FEB752"},
  {id: 3, name: "Engineering", perPrice: 2.2 , percIncr: 20, color: "#14C784"},
  {id: 4, name: "Marketing", perPrice: 2.2 , percIncr: 20, color: "#FA7AC5"},
  {id: 5, name: "Legal & compliance", perPrice: 2.2 , percIncr: 20, color: "#FA7AC5"},
  {id: 6, name: "Legal & compilance", perPrice: 2.2 , percIncr: 20, color: "#FA7AC5"},
  {id: 7, name: "Research & Analytics", perPrice: 2.2 , percIncr: 20, color: "#FA7AC5"},
  {id: 8, name: "Charity", perPrice: 2.2 , percIncr: 20, color: "#FA7AC5"},
  {id: 9, name: "Grants & investments", perPrice: 2.2 , percIncr: 20, color: "#FA7AC5"},
  {id: 10, name: "Patnerships", perPrice: 2.2 , percIncr: 20, color: "#FA7AC5"},
];