import Image from "next/image"
import ComponentContainer from "../ComponentContainer"
import LineItem from "../LineItem"


const DaoDetailRevenue = () => {
  return (
   <ComponentContainer pad="32px" hx="h-full">
    <div className="w-full">
        <div className="flex h-full justify-between items-center">
            <div className="w-[65%] lg:w-[60%] ">
                <LineItem revColor="#1E80FF" revType="Revenue"/>
            </div>
            <div className="w-[30%] h-full lg:w-[40%] flex items-center justify-center ">
                <button className="flex items-center w-fit gap-[8px] bg-[#151C23] rounded-[10px] py-[10px] px-[12px] shrink-0">
                    <p className="text-white font-medium align-[cap] text-[12px]/[18px] tracking-[-0.25%]">This year</p>
                    <Image src="/caret-down-icon.svg" width={0} height={0} className="w-[10px] h-[10px]" alt="caret down icon" />
                </button>
            </div>
        </div>
        <div className="w-full h-full flex items-end justify-between ">
            <div className="flex flex-col gap-[48px] ">
                <div className="flex flex-col gap-[16px]">
                    <h1 className="text-white font-bold text-[26px]/[37px] tracking-[-0.7%] align-[cap]">3.2B</h1>
                    <span className="flex gap-[8px] items-center font-medium text-[12px]/[18px] tracking-[-0.25%] text-[#84919F]">
                        <Image src="/deltaUp.svg" width={0} height={0} className="w-[10px] h-[10px]" alt="trend up icon"/>
                        <p className="text-[#14C784]">+1.9B</p>
                        <p>From prev. year</p>
                    </span>
                </div>
                <div className="flex flex-col gap-[16px]">
                    <h1 className="text-white font-bold text-[26px]/[37px] tracking-[-0.7%] align-[cap]">3.2B</h1>
                    <span className="flex gap-[8px] items-center font-medium text-[12px]/[18px] tracking-[-0.25%] text-[#84919F]">
                        <Image src="/deltaDown.png" width={0} height={0} className="w-[10px] h-[10px]" alt="trend up icon"/>
                        <p className="text-[#14C784]">+1.9B</p>
                        <p>From prev. year</p>
                    </span>
                </div>
            </div>
            <div>
                <Image src="/donut-chart.svg" width={0} height={0} className="w-[163px] aspect-square" alt="donut chart"/>
            </div>
        </div>
    </div>
   </ComponentContainer>
  )
}

export default DaoDetailRevenue